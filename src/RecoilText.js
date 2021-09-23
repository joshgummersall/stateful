import { counterState } from "./recoil";
import { useRecoilValue } from "recoil";

export function RecoilText(props) {
  const counter = useRecoilValue(counterState);
  return <span>Recoil counter value: {counter}</span>;
}
