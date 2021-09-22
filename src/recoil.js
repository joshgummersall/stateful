import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState', // unique id
  default: 0,         // default value
});