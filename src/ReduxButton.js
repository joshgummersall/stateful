import { incrementCounter } from "./redux";
import { useDispatch } from "react-redux";
import { useRenderCount } from "./renderCount";

export function ReduxButton(props) {
  useRenderCount("ReduxButton");

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(incrementCounter())}>
      {props.children}
    </button>
  );
}
