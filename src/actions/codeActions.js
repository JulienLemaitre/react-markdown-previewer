import {
  CODE_CHANGED,
  CODE_CLEARED
} from './types';

export const codeChanged = (text) => {
  console.log("Action - codeChanged : ",text);
  return {
    type: CODE_CHANGED,
    payload: text
  };
};

export const codeCleared = () => {
  return {
    type: CODE_CLEARED,
    payload: ''
  };
};
