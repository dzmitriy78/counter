import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";

/*type AppStoreType = typeof store*/
export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})
export const store = createStore(rootReducer)
