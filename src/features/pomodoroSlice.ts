import { ITab, Settings, StateType, Variant } from "types/stateType";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

import { createTimerObject } from "utils/createTimerObject";

type TimerKey = "pomodoro" | "shortBreak" | "longBreak";

const initialState: StateType = {
  currentTab: "pomodoro",
  settingsOpen: false,
  settings: {
    color: "primary",
    font: "primary",
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },

  pomodoro: createTimerObject(true, 25, 0),
  shortBreak: createTimerObject(true, 25, 0),
  longBreak: createTimerObject(true, 25, 0),
};

const pomodoroSlice = createSlice({
  name: "pomodoro",

  initialState,

  reducers: {
    setTab: (state, action: PayloadAction<ITab>) => {
      state[state.currentTab].paused = true;
      state.currentTab = action.payload;
    },

    setSettings: (state, action: PayloadAction<Settings>) => {
      state.settings = action.payload;

      state.pomodoro.minutes = state.settings.pomodoro;
      state.shortBreak.minutes = state.settings.shortBreak;
      state.longBreak.minutes = state.settings.longBreak;
    },

    toggleTimer: (state) => {
      state[state.currentTab].paused = !state[state.currentTab].paused;
    },

    timer: (state) => {
      const currentTab = state[state.currentTab];

      if (currentTab.paused) {
        if (currentTab.seconds === 0) {
          state[state.currentTab].minutes--;
          state[state.currentTab].seconds = 59;
        } else {
          state[state.currentTab].seconds--;
        }
      }
    },

    toggleSettings: (state) => {
      state.settingsOpen = !state.settingsOpen;
    },
  },
});

export default pomodoroSlice.reducer;

export const { setSettings, setTab, toggleSettings, toggleTimer, timer } =
  pomodoroSlice.actions;
