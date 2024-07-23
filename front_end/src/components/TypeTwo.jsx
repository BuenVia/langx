import { useState } from "react";

const TypeTwo = (props) => {

    const [answer, setAnswer] = useState("")
    const [active, setActive] = useState("")
    const [empty, setEmpty] = useState({borderColor: "", placeholder: ""})

    const handleChange = (e) => {
        const { value, id } = e.target
        setActive(id)
        setAnswer(value)
    }

    const handleGo = () => {
        if (answer === "") {
            setEmpty({borderColor: "test__input__empty", placeholder: "Please select an answer...!"})
        } else {
            const res = answer === props.testObj.answer ? true : false;
            props.checkAns(res)
        }
    }
    

    return (<>
        {props.testObj.instruction ? <p className="test__instruction">{props.testObj.instruction} <span className={empty.borderColor}>{empty.placeholder}</span></p> : null}
        <p className="test__question">{props.testObj.question}</p>
        <div className="test__btn__container">
            <button id={"1"} className={`test__ans__btn ${active === "1" ? "test__btn__active": null}`} value={props.testObj.answer} onClick={handleChange}>{props.testObj.answer}</button>
            <button id={"2"} className={`test__ans__btn ${active === "2" ? "test__btn__active": null}`} value={props.testObj.option_one} onClick={handleChange}>{props.testObj.option_one}</button>
        </div>
        <button className="test__btn" onClick={handleGo}>Go</button>
    </>)
}

export default TypeTwo