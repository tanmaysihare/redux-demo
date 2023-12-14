import {useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const incrementHandler = ()=>{
      dispatch({type:'increment'});
  }
  const incrementHandlerBy5 = ()=>{
    dispatch({type:'increment by 5'});
}
  const decrementHandler = ()=>{
      dispatch({type:'decrement'});
  }
  const decrementHandlerBy5 = ()=>{
    dispatch({type:'decrement by 5'});
}
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerBy5}>Increment by 5</button>
        <button onClick={decrementHandlerBy5}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
