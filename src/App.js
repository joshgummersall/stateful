import "./App.css";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { thunkAction } from "./redux";
import { useCallback } from "react";

function App(props) {
  const state = useSelector((state) => {
    return {};
  });

  const dispatch = useDispatch();

  const onPushAppState = useCallback(() => {
    dispatch(thunkAction(10));
  }, [dispatch]);

  console.log("render", { state, onPushAppState });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onPushAppState}>Push app state</button>
      </header>
    </div>
  );
}

export default App;

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
// )(App);
