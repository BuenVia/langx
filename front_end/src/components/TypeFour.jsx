import { useState } from "react";

const TypeFour = (props) => {

    const [answer, setAnswer] = useState("")
    const [empty, setEmpty] = useState({borderColor: "", placeholder: ""})

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
            setAnswer("")
        }
    }

    const playAudio = () => {
        const speech = new SpeechSynthesisUtterance()
        if(speechSynthesis.speaking) return
        speech.lang = 'fr-FR'
        speech.text = props.testObj.question
        // speech.rate = speed || 1
        speech.rate = 1
        speechSynthesis.speak(speech)
    }

    return (<>
        {props.testObj.instruction ? <p className="test__instruction">{props.testObj.instruction}</p> : null}
        <button className="test__audio" onClick={playAudio}>Play audio <i className="fas fa-volume-up"></i></button>
        <textarea className={`test__input ${empty.borderColor}`} name="userAns" onChange={handleChange} value={answer} placeholder={empty.placeholder}></textarea>
        <button className="test__btn" onClick={handleGo}>Go</button>
    </>)
}

export default TypeFour