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
                    <button className={"btn"} disabled={props.count === props.maxCount}
                            onClick={onIncHandler}>inc
                    </button>
                    <button className={"btn"} disabled={props.count === 0}
                            onClick={onResetHandler}>reset
                    </button>
                </div>
            </div>

        </div>
    </>
}
