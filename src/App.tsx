import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {Customization} from "./Customization";


function App() {

    let [count, setCount] = useState(0)
    const [maxCount, setMaxValue] = useState(1)


    function onCount() {
        if (count < maxCount) {
            count += 1
        } else return
        setCount(count)
    }

    function onReset() {
        count = 0
        setCount(count)
    }

    return (
        <div className={"globalApp"}>
            <div className="customBlock">
                <div className={"customScreen"}>
                    max value:
                    <input type="number" step="1" onChange={e => {
                        setMaxValue(+e.currentTarget.value);
                    }}/>
                </div>
                <div className={"customScreen"}>
                    start value:
                    <input type="number" step="1" onChange={e => {
                        setCount(+e.currentTarget.value)
                    }}/>
                </div>
                <div className={"customButtons"}>
                    <Customization setMaxValue={setMaxValue}
                                   setCount={setCount}/>
                </div>
            </div>

            <div className="counter">
                <div className={"screen"}>
                    <div className={count === maxCount ? "large" : ""}>
                        {count}
                    </div>
                </div>
                <div className={"buttons"}>
                    <Buttons onCount={onCount}
                             onReset={onReset}
                             count={count}
                             maxCount={maxCount}
                    />
                </div>

            </div>
        </div>
    );
}

export default App;
