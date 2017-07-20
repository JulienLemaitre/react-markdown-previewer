import {
  CODE_CHANGED,
  CODE_CLEARED
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case CODE_CHANGED:
      console.log("TextReducer - CODE_CHANGED : ", action.payload);
      return action.payload;
    case CODE_CLEARED:
      return '';
    default:
      return state;
  }
};
