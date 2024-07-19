import { combineReducers } from "redux";
import pointsReducer from "./pointsReducer";
;


const allReducers = combineReducers({
    points: pointsReducer,
   
   
})                                                                                             

export default allReducers