import { useState } from "react";

const TypeFour = (props) => {

    const [answer, setAnswer] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setAnswer(value)
    }

    const handleGo = () => {
        const res = answer === props.testObj.answer ? true : false;
        props.checkAns(res)
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
        {props.testObj.instruction ? <p>{props.testObj.instruction}</p> : null}
        <button onClick={playAudio}>Play audio</button>
        <textarea name="userAns" onChange={handleChange}></textarea>
        <button onClick={handleGo}>Go</button>
    </>)
}

export default TypeFour