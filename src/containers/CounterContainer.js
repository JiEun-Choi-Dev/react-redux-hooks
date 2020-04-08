import React from "react";
import { useSelector, useDispatch } from "react-redux";
//useSlector redux store의 값 조회할 때 사용 cf: mapStateToProps
//useActions fun/object/array==> 삭제된 기능/useDispatch로 대체
import Counter from "../components/Counter";
import { INCREMENT, DECREMENT } from "../modules/counter";

const CounterContainer = () => {
  const counter = useSelector((state) => state.counter, []);
  //(selector, dependence)
  //   const { onIncrease, onDecrease } = useActions({
  // onIncrease: incremnet,
  // onDecrease: decrement,
  //   });
  const dispatch = useDispatch();
  //   const [onIncrease, onDecrease] = useActions([increment, decrement], []);

  return (
    // <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
    <Counter
      number={counter}
      onIncrease={() => dispatch({ type: INCREMENT })}
      onDecrease={() => dispatch({ type: DECREMENT })}
    />
  );
};

export default CounterContainer;
