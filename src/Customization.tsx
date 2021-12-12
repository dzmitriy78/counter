import React from "react";

export function Customization(props:any) {

    function setParameters () {
        props.setMaxValue()
        props.setCount()
    }

    return (
        <div className={"set"}>
            <button className={"btn"} onClick={setParameters}>set
            </button>
        </div>
    )
}