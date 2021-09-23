import { useRenderCount } from "./renderCount";
import { useSelector } from "react-redux";

export function ReduxText() {
  useRenderCount("ReduxText");

  const counter = useSelector((state) => state.counter);

  return <span>Redux counter value: {counter}</span>;
}
