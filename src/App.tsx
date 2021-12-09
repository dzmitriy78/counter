import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";

function App() {

    const maxCount = 5;
    let [count, setCount] = useState(0)

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

        <div className="App">

            <div className={count === maxCount ? "large" : ""}>
                {count}
            </div>
            <div className={"buttons"}>
                <Buttons onCount={onCount}
                         onReset={onReset}
                         count={count}
                         maxCount={maxCount}
                />
            </div>

        </div>
    );
}

export default App;
