import { useState } from "react";

const TypeTwo = (props) => {

    const [answer, setAnswer] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setAnswer(value)
    }

    const handleGo = () => {
        const res = answer === props.testObj.answer ? true : false;
        props.checkAns(res)
    }

    return (<>
        {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <button value={props.testObj.answer} onClick={handleChange}>{props.testObj.answer}</button>
        <button value={props.testObj.option_one} onClick={handleChange}>{props.testObj.option_one}</button>
        <button onClick={handleGo}>Go</button>
    </>)
}

export default TypeTwo