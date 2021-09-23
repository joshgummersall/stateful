import { atom, useRecoilState } from "recoil";
import { updateUser } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useRenderCount } from "./renderCount";

export const useRecoiledRedux = (
  recoilKey,
  reduxSelector,
  reduxActionCreator
) => {
  const reduxState = useSelector(reduxSelector);
  const dispatch = useDispatch();

  // store atom in ref to persist across renders
  const ref = useRef();
  if (!ref.current) {
    ref.current = atom({
      key: recoilKey,
      default: reduxState,
    });
  }

  // Subscribe to atom now that it is created
  const [recoilValue, setRecoilValue] = useRecoilState(ref.current);

  // synchronize recoil with redux state
  useEffect(() => {
    setRecoilValue(reduxState);
  }, [setRecoilValue, reduxState]);

  // optionally synchronize redux with recoil state
  useEffect(() => {
    if (reduxActionCreator) {
      dispatch(reduxActionCreator(recoilValue));
    }
  }, [dispatch, reduxActionCreator, recoilValue]);

  // Satisfy recoil hook signature
  return [recoilValue, setRecoilValue];
};

const selectUserState = (state) => state.user;

export default function RecoiledRedux() {
  const count = useRenderCount("RecoiledRedux");

  const dispatch = useDispatch();

  const reduxUser = useSelector(selectUserState);
  console.log(reduxUser);

  const [recoilUser, setRecoilUser] = useRecoiledRedux(
    "user",
    selectUserState,
    updateUser
  );

  return (
    <div>
      <h1>useRecoiledRedux</h1>
      <p>
        Redux name:{" "}
        <input
          onChange={(e) => dispatch(updateUser({ name: e.target.value }))}
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
      <p>Renders: {count.current}</p>
    </div>
  );
}
