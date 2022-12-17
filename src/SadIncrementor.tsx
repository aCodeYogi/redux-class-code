import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions/mood-actions";
import Button from "./Button/Button";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(sadButtonClicked(quantity, new Date()));
  }

  return (
    <div>
      <h3>Are you sad?</h3>
      <input
        className="border border-gray-300 rounded-md"
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <Button onClick={increment} className="bg-blue-700">
        Yes
      </Button>
    </div>
  );
};

SadIncrementor.defaultProps = {};

export default memo(SadIncrementor);
