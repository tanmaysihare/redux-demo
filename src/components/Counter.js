import {useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);
  
  const incrementHandler = ()=>{
      dispatch(counterActions.increment());
  }
  const increase = ()=>{
    dispatch(counterActions.increase(5));
}
  const decrementHandler = ()=>{
      dispatch(counterActions.decrement());
  }
  const decrease = ()=>{
    dispatch(counterActions.decrease(5));
}
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increase}>Increment by 5</button>
        <button onClick={decrease}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
