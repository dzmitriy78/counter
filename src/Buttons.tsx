import React from "react";

export function Buttons(props: any) {
        return (

        <div>
            <button disabled={props.count === 5} onClick={()=>props.onCount()}>int</button>
            <button disabled={props.count===0} onClick={()=>props.onReset()}>reset</button>
        </div>
    )
}