import { useState } from "react";

const TypeOne = (props) => {

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
        <textarea type="text" className="test__input" name="userAns" onChange={handleChange}></textarea>
        <button className="test__btn" onClick={handleGo}>Go</button>
    </>)
}

export default TypeOne