import { useDispatch, useSelector } from "react-redux";
import { thunkAction, incrementCounter } from "./redux";
import { useCallback } from "react";

export function ReduxButton(props) {
  const { text } = props;
  const state = useSelector((state) => {
    return {
      appState: state.appState,
      counterState: state.counterState
    };
  });

  const dispatch = useDispatch();

  const onPushAppState = useCallback(() => {
    dispatch(thunkAction(10));
    dispatch(incrementCounter());
  }, [dispatch]);

  console.log("render", { state, onPushAppState });

  return (
    <button onClick={onPushAppState}>{text}</button>
  )
};

// export default connect(
//   (state) => {
//     return { appState: state.appState };
//   },
//   (dispatch) => {
//     return {
//       onPushAppState: () => {
//         dispatch(pushAppState(10))
//       }
//     };
//   }
// )(Button);
