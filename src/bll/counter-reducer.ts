type initialStateType = typeof initialState

const initialState = {
    countValue: "enter values"
}
export const counterReducer = (state: initialStateType = initialState, action: CounterReducerAT): { countValue: number | string } => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state,
                countValue: state.countValue + 1
            }
        }
        case "RESET-VALUE": {
            return {
                ...state,
                countValue: action.startValue
            }
        }
        case "SET-VALUE-FROM-LS": {
            return {
                ...state,
                countValue: action.countValue
            }
        }
        case "ERROR-VALUE": {
            return {
                ...state,
                countValue: action.props
            }
        }
        case "SET-PARAMETERS": {
            return {
                ...state,
                countValue: action.startValue
            }
        }
        default:
            return state
    }
}

export const incCountValueAC = () => ({type: "INC-VALUE"} as const)
export type IncCountValueAT = ReturnType<typeof incCountValueAC>
export const onResetValueAC = (startValue: string | number) => ({type: "RESET-VALUE", startValue} as const)
export type onResetValueAT = ReturnType<typeof onResetValueAC>
export const setValueFromLSAC = (countValue: number | string) => ({type: "SET-VALUE-FROM-LS", countValue: countValue} as const)
export type SetValueFromLSAT = ReturnType<typeof setValueFromLSAC>
export const errorHandlerAC = (props: string | number) => ({type: "ERROR-VALUE", props} as const)
export type ErrorHandlerAT = ReturnType<typeof errorHandlerAC>
export const setParametersAC = (startValue: string | number) => ({type: "SET-PARAMETERS", startValue: startValue} as const)
export type SetParametersAT = ReturnType<typeof setParametersAC>
export type CounterReducerAT = IncCountValueAT | SetValueFromLSAT | onResetValueAT | ErrorHandlerAT | SetParametersAT