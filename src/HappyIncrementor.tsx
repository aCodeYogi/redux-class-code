import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/mood-actions";
import Button from "./Button/Button";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  function increment() {
    dispatch(happyButtonClicked(quantity, new Date()));
  }

  return (
    <div>
      <h3>Are you happy?</h3>
      <input
        className="border border-gray-300 rounded-md"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <Button onClick={increment} className="bg-orange-700">
        Yes
      </Button>
    </div>
  );
};

HappyIncrementor.defaultProps = {};

export default memo(HappyIncrementor);
