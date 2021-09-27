import React from "react";

//Used in Pomodoro.js
export const FocusDurationButtons = ({
  minutesToDuration,
  focusDuration,
  decreaseFocusDuration,
  session,
  increaseFocusDuration,
}) => {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={decreaseFocusDuration}
          disabled={session}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={increaseFocusDuration}
          disabled={session}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};

export const BreakDurationButtons = ({
  minutesToDuration,
  breakDuration,
  decreaseBreakDuration,
  session,
  increaseBreakDuration,
}) => {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration */}
        Break Duration: {minutesToDuration(breakDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={decreaseBreakDuration}
          disabled={session}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={increaseBreakDuration}
          disabled={session}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};