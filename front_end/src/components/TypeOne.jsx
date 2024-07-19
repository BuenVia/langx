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
    {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <p>{props.testObj.question}</p>
        <input type="text" name="userAns" onChange={handleChange}/>
        <button onClick={handleGo}>Go</button>
    </>)
}

export default TypeOne