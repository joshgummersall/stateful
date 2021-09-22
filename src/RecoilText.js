import { useRecoilState } from "recoil";
import { counterState } from "./recoil";

export function RecoilText(props) {
  const counter = useRecoilState(counterState);
  return (
    <span>Recoil counter value: {counter}</span>
  );
}