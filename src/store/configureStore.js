import { createStore, combineReducers } from "redux";
import movieReducer from "../reducers/movieReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        movies : movieReducer
    }))
    return store
}

export default configureStore