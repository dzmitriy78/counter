import {ChangeEvent, useState} from "react";

export const Settings = (props: any) => {

    let [startCount, setStartCount] = useState<number | string>(0)
    const [maxCount, setMaxValue] = useState<number | string>(0)

    const handlerMaxCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const handlerStartCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStartCount(+e.currentTarget.value)
    }
    const setParameters = () => {
        props.setStartCount(startCount)
        props.setMaxCount(maxCount)
    }

    return <>
        <div className="customBlock">

            <div className={"customScreen"}>
                max value:
                <input type="number" step="1" onChange={handlerMaxCountChange} value={maxCount}/>
            </div>
            <div className={"customScreen"}>
                start value:
                <input type="number" step="1" onChange={handlerStartCountChange} value={startCount}/>
            </div>
            <div className={"customButtons"}>
                <div className={"set"}>
                    <button className={"btn"} onClick={setParameters}>set
                    </button>
                </div>
            </div>
        </div>

    </>
}