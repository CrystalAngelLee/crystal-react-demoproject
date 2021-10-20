import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'
import CustomCounterReducer from './counter.custom.reducer'
import DelayCounterReducer from './counter.delay.reducer'

export default combineReducers({
    counter: CounterReducer,
    custom_counter: CustomCounterReducer,
    delay_counter: DelayCounterReducer,
})