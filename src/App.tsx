import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";

function App() {

    let [count, setCount] = useState(0)

    function onCount() {
        if (count < 5) {
            count += 1
        } else {
            count+=0;
        }
        setCount(count)
    }
    function onReset() {
        count = 0
        setCount(count)
    }

    return (

        <div className="App">
            <div>
                <div className={count===5? "large" : ""}>
                    {count}
                </div>

                <Buttons onCount = {onCount}
                         onReset = {onReset}
                         count = {count}

                />
            </div>

        </div>
    );
}

export default App;
