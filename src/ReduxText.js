import { useSelector } from "react-redux";

export function ReduxText(props) {
  const state = useSelector((state) => state.counterState);
  return (
    <span>Redux counter value: {state}</span>
  )
}