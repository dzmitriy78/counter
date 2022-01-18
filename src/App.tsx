import {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Counter} from "./Counter";


function App() {

    let [count, setCount] = useState<number | string>("enter values")
    const [maxCount, setMaxValue] = useState<number | string>(1)
    const [startValue, setStartValue] = useState<number | string>(0)

    const errorHandler = () => {
        if (startValue >= maxCount) {
            setCount("incorrect value")
            return
        }
        if (startValue < 0) {
            setCount("incorrect value")
            return
        }
        setCount("enter values")
    }
    useEffect(() => {
        errorHandler()
    }, [maxCount, startValue])

    function onInc() {
        if (count < maxCount) {
            count = +count + 1
        } else return
        setCount(count)
    }

    function onReset() {
        setCount(startValue)
    }

    const handlerMaxCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const handlerStartCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    const setParameters = () => {
        setCount(startValue)
    }
    const disableButton = (): boolean => {
        let disable = false
        if (startValue >= maxCount) {
            disable = true
        }
        if (startValue < 0) {
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
                      maxCount={maxCount}
                      disableButton={disableButton}/>
            <Counter count={count}
                     maxCount={maxCount}
                     onInc={onInc}
                     onReset={onReset}
                     disableButton={disableButton}/>
        </div>
    );
}

export default App;
