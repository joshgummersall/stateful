import "./App.css";
import logo from "./logo.svg";
import { ReduxButton } from "./ReduxButton";
import { RecoilButton } from "./RecoilButton";
import { RecoilText } from "./RecoilText";
import { ReduxText } from "./ReduxText";
import { useRecoiledRedux } from "./hooks";
import { useEffect } from "react";
import { updateUserState } from "./redux";
import { useDispatch, useSelector } from "react-redux";

const selectUserState = (state) => state.userState;

function App() {
  const reduxUser = useSelector(selectUserState);
  const dispatch = useDispatch();

  const [recoilUser, setRecoilUser] = useRecoiledRedux(
    "userState",
    selectUserState,
    updateUserState
  );

  useEffect(() => {
    setRecoilUser({ name: "Alex" });
  }, [setRecoilUser]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Redux store name:{" "}
          <input
            onChange={(e) =>
              dispatch(updateUserState({ name: e.target.value }))
            }
            value={reduxUser?.name ?? ""}
          />
        </p>
        <p>
          Recoil name:{" "}
          <input
            onChange={(e) => setRecoilUser({ name: e.target.value })}
            value={recoilUser?.name ?? ""}
          />
        </p>
        <ReduxButton text="Redux" />
        <RecoilButton text="Recoil" />
        <RecoilText />
        <ReduxText />
      </header>
    </div>
  );
}

export default App;
