import {useState} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Counter} from "./Counter";


function App() {

    let [count, setCount] = useState<number | string>("enter values")
    const [maxCount, setMaxValue] = useState<number | string>(0)

    let startValue: number | string = 0;

    const setStartCount = (startCount: number) => {
        setCount(startCount)
        startValue = count;
    }
    const setMaxCount = (maxCount: number) => {
        setMaxValue(maxCount)
    }
    function onInc() {
        if (count < maxCount) {
            count = +count + 1
        } else return
        setCount(count)
    }

    function onReset() {
        setCount(startValue)
    }
    return (
        <div className={"globalApp"}>
            <Settings setStartCount={setStartCount}
                      setMaxCount={setMaxCount}/>
            <Counter count={count}
                     maxCount={maxCount}
                     onInc={onInc}
                     onReset={onReset}/>


        </div>
    );
}

export default App;
