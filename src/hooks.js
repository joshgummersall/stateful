import { atom, useRecoilState } from "recoil";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export const useRecoiledRedux = (
  recoilKey,
  reduxSelector,
  reduxActionCreator
) => {
  const dispatch = useDispatch();
  const reduxState = useSelector(reduxSelector);

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
