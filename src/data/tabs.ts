import { ITab } from "types/stateType";

interface tab {
    value: "pomodoro" | "short break" | "long break";
    tab: ITab
}


export const tabs: tab[] = [
  {
    value: "pomodoro",
    tab: "pomodoro",
  },

  {
    value: "short break",
    tab: "shortBreak",
  },

  {
    value: "long break",
    tab: "longBreak",
  },
];
