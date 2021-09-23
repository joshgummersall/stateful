import React from "react";
import { counterState } from "./recoil";
import { useRecoilCallback } from "recoil";
import { useRenderCount } from "./renderCount";

export function RecoilButton(props) {
  useRenderCount("RecoilButton");

  const onClick = useRecoilCallback(({ set }) => () => {
    set(counterState, (val) => val + 1);
  });

  return <button onClick={onClick}>{props.children}</button>;
}
