import { combineReducers } from 'redux';
import TextReducer from './reducer_text';
import MarkDownReducer from './reducer_markdown';

const rootReducer = combineReducers({
  codeTyped: TextReducer,
  codeMarked: MarkDownReducer
});

export default rootReducer;