export const Counter = (props: any) => {

    const onIncHandler = () => {
        props.onInc()
    }

    const onResetHandler = () => {
        props.onReset()
    }

    return <>
        <div className="counter">
            <div className={"screen"}>
                <div className={props.count === props.maxCount ? "large" : ""}>
                    {props.count}
                </div>
            </div>
            <div className={"buttons"}>
                <div className={"inc"}>
                    <button className={"btn"} style={{opacity: props.disableButton() ? "50%" : ""}}
                            disabled={props.disableButton()}
                            onClick={onIncHandler}>inc
                    </button>
                    <button className={"btn"} style={{opacity: props.disableButton() ? "50%" : ""}}
                            disabled={props.disableButton()}
                            onClick={onResetHandler}>reset
                    </button>
                </div>
            </div>

        </div>
    </>
}
