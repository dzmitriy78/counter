export const Settings = (props: any) => {

    let style: string;
    style = props.disableButton() ? "error" : "";

    return <>
        <div className="customBlock">

            <div className={"customScreen"}>
                max value:
                <input className={style} type="number" step="1" onChange={props.handlerMaxCountChange} value={props.maxCount}/>
            </div>
            <div className={"customScreen"}>
                start value:
                <input className={style} type="number" step="1" onChange={props.handlerStartCountChange} value={props.startValue}/>
            </div>
            <div className={"customButtons"}>
                <div className={"set"}>
                    <button className={"btn"}
                            style={{opacity: props.disableButton() ? "50%" : ""}}
                            disabled={props.disableButton()}
                            onClick={props.setParameters}>set
                    </button>
                </div>
            </div>
        </div>
    </>
}