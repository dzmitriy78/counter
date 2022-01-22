type PropsCounterType = {
    disableButton: () => boolean
    countValue: string | number
    maxValue: string | number
    onReset: () => void
    onInc: () => void
}

export const Counter = (props: PropsCounterType) => {

    const onIncHandler = () => {
        props.onInc()
    }

    const onResetHandler = () => {
        props.onReset()
    }

    return <>
        <div className="counter">
            <div className={"screen"}>
                <div className={props.countValue === props.maxValue ? "large" : ""}>
                    {props.countValue}
                </div>
            </div>
            <div className={"buttons"}>
                <div className={"inc"}>
                    <button className={"btn"} style={{opacity: props.disableButton() ? "50%" : ""}}
                            disabled={props.disableButton()}
                            onClick={onIncHandler}>inc
                    </button>
                    <button className={"btn"}
                            onClick={onResetHandler}>reset
                    </button>
                </div>
            </div>

        </div>
    </>
}
