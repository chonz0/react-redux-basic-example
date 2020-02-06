import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addGreeting } from './actions';

export default ({ name }) => {
  const greetings = useSelector(state => state.greetings);
  const dispatch = useDispatch();

  const onPress = () => {
    console.log('on pressed');
    dispatch(addGreeting('hola'))
  }
  
  return (
  <>
    <h1>Hello {name}!</h1>
    <button onClick={() => onPress()}>
      Press me
    </button>
    {greetings.map(greet => <li>{greet.text}</li>)}
  </>
)};
