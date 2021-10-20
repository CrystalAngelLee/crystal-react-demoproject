import { createStore, applyMiddleware } from 'redux'
// import logger from './middlewares/logger'
// import thunk from './middlewares/thunk'
// import thunk from 'redux-thunk'
import reducer from './reducers'

// 使用 thunk 中间件
// export const store = createStore(reducer, applyMiddleware(logger, thunk))

import createSagaMiddleware from 'redux-saga'
import CounterDelaySaga from './sagas/counter.delay.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// 启动
sagaMiddleware.run(CounterDelaySaga)