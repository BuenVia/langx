const TypeThree = (props) => {
    return (<>
        {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <button value={false}>{props.testObj.answer}</button>
        <button value={false}>{props.testObj.option_one}</button>
        <button value={false}>{props.testObj.option_two}</button>
        <button value={false}>{props.testObj.option_three}</button>
    </>)
}

export default TypeThree