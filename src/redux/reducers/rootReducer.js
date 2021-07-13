import { combineReducers } from 'redux';
import reducer from './reducer'
import errorReducer from './errorReducer'


export default combineReducers({
    _root: reducer,
    errorRoot: errorReducer
});