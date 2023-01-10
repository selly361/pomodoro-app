export function createTimerObject(paused: boolean, minutes: number, seconds: number) {
    return {
        paused,
        minutes,
        seconds
    };
  }