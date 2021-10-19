import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'
import CustomCounterReducer from './customCounter.reducer'

export default combineReducers({
    counter: CounterReducer,
    _counter: CustomCounterReducer
})