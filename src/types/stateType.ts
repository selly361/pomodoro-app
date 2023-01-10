export interface TimerState {
  paused: boolean;
  minutes: number;
  seconds: number;
}

export type Variant = "primary" | "secondary" | "tertiary"
export type ITab = "pomodoro" | "shortBreak" | "longBreak"

export interface Settings {
    color: Variant;
    font: Variant;
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
}

export interface StateType {
  currentTab: ITab;
  settingsOpen: boolean;
  settings: Settings;
  pomodoro: TimerState;
  shortBreak: TimerState;
  longBreak: TimerState;
}
