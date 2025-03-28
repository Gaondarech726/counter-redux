import { useDispatch, useSelector } from "react-redux";
import { minusAction, plusAction } from "./redux/counter/counterAction";

export const App = () => {
  const counterValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch(plusAction());
  };
  const onMinus = () => {
    dispatch(minusAction());
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
