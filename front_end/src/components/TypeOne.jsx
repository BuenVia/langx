const TypeOne = (props) => {
    return (<>
    {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <input type="text" />
    </>)
}

export default TypeOne