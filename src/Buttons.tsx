import React from "react";

type PropsType = {
    count: number
    maxCount: number
    onCount: () => void
    onReset: () => void
}

export function Buttons(props: PropsType) {
    return (
        <div className={"inc"}>
            <button className={"btn"} disabled={props.count === props.maxCount}
                    onClick={() => props.onCount()}>inc
            </button>
            <button className={"btn"} disabled={props.count === 0}
                    onClick={() => props.onReset()}>reset
            </button>
        </div>
    )
}