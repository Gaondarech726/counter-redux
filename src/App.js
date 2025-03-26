import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const counterValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch({
      type: "plus",
    });
  };
  const onMinus = () => {
    dispatch({
      type: "minus",
    });
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
