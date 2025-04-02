import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./redux/counter/counterAction";

export const App = () => {
  const counterValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch(plus());
  };
  const onMinus = () => {
    dispatch(minus());
  };
  return (
    <>
      <div>
        <span>{counterValue}</span>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
      </div>
    </>
  );
};
