import { useSelector } from "react-redux";
import { useRenderCount } from "./renderCount";

export function ReduxText() {
  useRenderCount("ReduxText");

  const state = useSelector((state) => state.counterState);

  return <span>Redux counter value: {state}</span>;
}
