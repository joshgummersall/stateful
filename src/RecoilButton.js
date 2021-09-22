import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from './recoil';

export function RecoilButton(props) {
  const { text } = props;
  const [counter, setCounter] = useRecoilState(counterState);

  const clickHandler = () => setCounter(counter + 1);
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

