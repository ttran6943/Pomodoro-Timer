import React from "react";
import Pause from "./Pause";

export default function Hidden({
  session,
  focusDuration,
  breakDuration,
  minutesToDuration,
  secondsToDuration,
  isTimerRunning,
  progressBarWidth
}) {
  if (!session) return null;
  //Used to determine "Focusing for __ minutes" or "On Break for __ minutes"
  let sessionLabel;
  session?.label === "On Break"
    ? (sessionLabel = breakDuration)
    : (sessionLabel = focusDuration);

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for {minutesToDuration(sessionLabel)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
          <Pause isTimerRunning={isTimerRunning} />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressBarWidth()} 
              style={{ width: `${progressBarWidth()}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}