import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors/mood-selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  console.log("SadTracker refreshed");
  const sadMoments = useSelector(sadMomentsSelector);
  return (
    <div className="bg-blue-700 px-8 py-4">
      {sadMoments.map((m) => (
        <div key={m.when}>
          <>
            Sadness Intensity: {m.intensity}, when: {m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};

SadTracker.defaultProps = {};

export default memo(SadTracker);
