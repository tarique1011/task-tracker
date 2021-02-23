import { createStore } from 'redux'
import rootReducer from '../reducers'
import Reactotron from '../../ReactotronConfig.js'

const store = createStore(rootReducer, Reactotron.createEnhancer())

export default store
