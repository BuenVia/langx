const TypeFour = (props) => {

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
        <textarea></textarea>
    </>)
}

export default TypeFour