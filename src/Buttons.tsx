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
            <button disabled={props.count === props.maxCount}
                    onClick={() => props.onCount()}>int
            </button>
            <button disabled={props.count === 0}
                    onClick={() => props.onReset()}>reset
            </button>
        </div>
    )
}