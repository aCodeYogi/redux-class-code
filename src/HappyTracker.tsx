import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectors/mood-selectors";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
  console.log("HappyTracker refreshed");
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className="bg-orange-700 px-8 py-4">
      {happyMoments.map((m) => (
        <div key={m.when}>
          <>
            Happiness Intensity: {m.intensity}, when: {m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};

HappyTracker.defaultProps = {};

export default memo(HappyTracker);
