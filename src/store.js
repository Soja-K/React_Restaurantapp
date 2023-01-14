import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { restaurantListReducer } from "./Reducer/restaurantReducer";
//to generate middleware

const reducers = combineReducers({//2nd execution
    restaurantReducer:restaurantListReducer //key:function

   
})

const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))//1 execution

export default store