import {combineReducers} from 'redux';
import coreReducer from './core/core.reducers';

const reducer = combineReducers({
    core: coreReducer,
})

export default reducer;
