import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./redux/counter/counterSlice";

export const App = () => {
  const counterValue = useSelector((state) => state.counter.counter);
  console.log(counterValue)
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
        <h1>hiiiiiiiii</h1>
        <span>{counterValue}</span>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
      </div>
    </>
  );
};
