const TypeTwo = (props) => {
    return (<>
        {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <button value={false}>{props.testObj.answer}</button>
        <button value={false}>{props.testObj.option_one}</button>
    </>)
}

export default TypeTwo