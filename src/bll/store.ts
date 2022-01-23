import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";

/*type AppStoreType = typeof store*/
export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

let preloadedState;
const persistedString = localStorage.getItem("app-state")
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem("app-state", JSON.stringify(store.getState()))
})