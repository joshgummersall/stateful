import { counterState } from "./recoil";
import { useRecoilValue } from "recoil";
import { useRenderCount } from "./renderCount";

export function RecoilText() {
  useRenderCount("RecoilText");

  const counter = useRecoilValue(counterState);

  return <span>Recoil counter value: {counter}</span>;
}
