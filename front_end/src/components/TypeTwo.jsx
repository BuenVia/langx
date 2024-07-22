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
        {props.testObj.instruction ? <p className="test__instruction">{props.testObj.instruction}</p> : null}
        <p className="test__question">{props.testObj.question}</p>
        <div className="test__btn__container">
            <button className="test__ans__btn" value={props.testObj.answer} onClick={handleChange}>{props.testObj.answer}</button>
            <button className="test__ans__btn" value={props.testObj.option_one} onClick={handleChange}>{props.testObj.option_one}</button>
        </div>
        <button className="test__btn" onClick={handleGo}>Go</button>
    </>)
}

export default TypeTwo