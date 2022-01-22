import {ChangeEvent} from "react";

type initialStateType = typeof initialState

const initialState = {
    startValue: 0,
    maxValue: 1
}
export const settingsReducer = (state: initialStateType = initialState, action: SettingsReducerAT): {
    startValue: number | string
    maxValue: number | string
} => {
    switch (action.type) {
        case "CHANGE-START-VALUE": {
            return {
                ...state,
                startValue: +action.e.currentTarget.value
            }
        }
        case "CHANGE-MAX-VALUE": {
            return {
                ...state,
                maxValue: +action.e.currentTarget.value
            }
        }
        default:
            return state
    }
}

export const changeStartValueAC = (e: ChangeEvent<HTMLInputElement>) => ({type: "CHANGE-START-VALUE", e} as const)
export type ChangeStartValueAT = ReturnType<typeof changeStartValueAC>
export const changeMaxValueAC = (e: ChangeEvent<HTMLInputElement>) => ({type: "CHANGE-MAX-VALUE", e} as const)
export type ChangeMaxValueAT = ReturnType<typeof changeMaxValueAC>
export type SettingsReducerAT = ChangeStartValueAT | ChangeMaxValueAT
