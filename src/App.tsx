import {ChangeEvent, useEffect} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {errorHandlerAC, incCountValueAC, onResetValueAC, setParametersAC} from "./bll/counter-reducer";
import {changeMaxValueAC, changeStartValueAC} from "./bll/settings-reducer";

function App() {

    // @ts-ignore
    let startValue = useSelector<AppStateType, number | string>(state => state.settings.startValue)
    // @ts-ignore
    let maxValue = useSelector<AppStateType, number | string>(state => state.settings.maxValue)
    // @ts-ignore
    let countValue = useSelector<AppStateType, number | string>(state => state.counter.countValue)


    /*  useEffect(()=>{
              let startValueToString = localStorage.getItem("start value")
              if (startValueToString) {
                  let newStartValue = JSON.parse(startValueToString)
                  setStartValue(newStartValue)
              }
          },[]
      )
      useEffect(()=>{
              let maxValueToString = localStorage.getItem("max value")
              if (maxValueToString) {
                  let newMaxValue = JSON.parse(maxValueToString)
                  setMaxValue(newMaxValue)
              }
          },[]
      )*/
    /*

         useEffect(()=> {
             localStorage.setItem("start value", JSON.stringify(startValue))
             }, [startValue]
         )
         useEffect(()=> {
             localStorage.setItem("max value", JSON.stringify(maxValue))
             }, [maxValue]
         )
     */
    const errorHandler = () => {
        if (startValue >= maxValue) {
            dispatch(errorHandlerAC("incorrect value"))
            return
        }
        if (startValue < 0) {
            dispatch(errorHandlerAC("incorrect value"))
            return
        }
        dispatch(errorHandlerAC("enter values"))
    }
    useEffect(() => {
        errorHandler()
    }, [maxValue, startValue])

    const dispatch = useDispatch()

    const onInc = () => {
        if (countValue < maxValue) {
            dispatch(incCountValueAC())
        }
    }

    function onReset() {
        if (startValue >= 0) {
            dispatch(onResetValueAC(startValue))
        }
    }

    const handlerMaxCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(e))
    }
    const handlerStartCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(e))
    }
    const setParameters = () => {
        dispatch(setParametersAC(startValue))
    }
    const disableButton = (): boolean => {
        let disable = false
        if (startValue >= maxValue) {
            disable = true
        }
        if (startValue < 0) {
            disable = true
        }if (countValue === maxValue) {
            disable = true
        }if (countValue < 0) {
            disable = true
        }
        return disable
    }
    return (
        <div className={"globalApp"}>
            <Settings setParameters={setParameters}
                      handlerMaxCountChange={handlerMaxCountChange}
                      handlerStartCountChange={handlerStartCountChange}
                      startValue={startValue}
                      maxValue={maxValue}
                      disableButton={disableButton}/>
            <Counter countValue={countValue}
                     maxValue={maxValue}
                     onInc={onInc}
                     onReset={onReset}
                     disableButton={disableButton}/>
        </div>
    );
}

export default App;
