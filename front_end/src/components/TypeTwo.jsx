import { useEffect, useState } from "react";
import TypeBtn from "./TypeBtn";

const TypeTwo = (props) => {

    const [answer, setAnswer] = useState("")
    const [active, setActive] = useState("")
    const [ansList, setAnsList] = useState([])
    const [empty, setEmpty] = useState({borderColor: "", placeholder: ""})

    const handleChange = (id, value) => {
        setActive(id)
        setAnswer(value)
        console.log(id);
    }

    const handleGo = () => {
        if (answer === "") {
            setEmpty({borderColor: "test__input__empty", placeholder: "Please select an answer...!"})
        } else {
            const res = answer === props.testObj.answer ? true : false;
            props.checkAns(res)
        }
    }

    
    useEffect(() => {
        const ansArr = [props.testObj.answer, props.testObj.option_one]
        const shuffleAns = (arr) => {
            return arr.sort(() => Math.random() - 0.5)
        }
        setAnsList(shuffleAns(ansArr))
    }, [])

    return (<>
        {props.testObj.instruction ? <p className="test__instruction">{props.testObj.instruction} <span className={empty.borderColor}>{empty.placeholder}</span></p> : null}
        <p className="test__question">{props.testObj.question}</p>
        <div className="test__btn__container">
            {ansList.map(ans => {
                return <span key={ansList.indexOf(ans)}><TypeBtn value={ans} id={ansList.indexOf(ans)} active={active} handleChange={handleChange} /></span>
            })}
        </div>
        <button className="test__btn" onClick={handleGo}>Go</button>
    </>)
}

export default TypeTwo