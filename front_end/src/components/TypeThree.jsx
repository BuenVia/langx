import { useState } from "react";

const TypeThree = (props) => {

    const [answer, setAnswer] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setAnswer(value)
    }

    const handleGo = () => {
        console.log(answer);
        const res = answer === props.testObj.answer ? true : false;
        props.checkAns(res)
    }

    return (<>
        {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <button value={props.testObj.answer} onClick={handleChange}>{props.testObj.answer}</button>
        <button value={props.testObj.option_one} onClick={handleChange}>{props.testObj.option_one}</button>
        <button value={props.testObj.option_two} onClick={handleChange}>{props.testObj.option_two}</button>
        <button value={props.testObj.option_three} onClick={handleChange}>{props.testObj.option_three}</button>
        <button onClick={handleGo}>Go</button>
    </>)
}

export default TypeThree