import marked from 'marked';
import {
  CODE_CHANGED,
  CODE_CLEARED
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case CODE_CHANGED:
      return marked(action.payload);
    case CODE_CLEARED:
      return '';
    default:
      return state;
  }
};
