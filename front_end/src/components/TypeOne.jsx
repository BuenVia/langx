import { useState } from "react";

const TypeOne = (props) => {

    const [answer, setAnswer] = useState("")
    const [empty, setEmpty] = useState({borderColor: "", placeholder: ""})
    const [displayBtn, setDisplayBtn] = useState("block")

    const handleChange = (e) => {
        const { value } = e.target
        setAnswer(value)
    }

    const handleGo = () => {
        if (answer === "") {
            setEmpty({borderColor: "test__input__empty", placeholder: "Please write an answer...!"})
        } else {
            const res = answer === props.testObj.answer ? true : false;
            props.checkAns(res)
            setDisplayBtn("none")
        }
    }

    return (<>
    {props.testObj.instruction ? <p className="test__instruction">{props.testObj.instruction}</p> : null}
        <p className="test__question">{props.testObj.question}</p>
        <textarea type="text" className={`test__input ${empty.borderColor}`} name="userAns" onChange={handleChange} value={answer} placeholder={empty.placeholder}></textarea>
        <button className="test__btn" style={{ display: displayBtn }} onClick={handleGo}>Go</button>
    </>)
}

export default TypeOne