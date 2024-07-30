import { useEffect, useState } from "react";
import FinishFlash from "./FinishFlash";

const Flash = (props) => {
    
    const [questions, setQuestions] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [userAns, setUserAns] = useState("")
    const [feedback, setFeedback] = useState(false)
    const [finish, setFinish] = useState(false)
    const [colour, setColour] = useState("")
    const [loading, setLoading] = useState(false)

    // Randomise the answer array
    useEffect(() => {
        const shuffle = (array) => { 
            for (let i = array.length - 1; i > 0; i--) { 
              const j = Math.floor(Math.random() * (i + 1)); 
              [array[i], array[j]] = [array[j], array[i]]; 
            } 
            return array; 
          }; 
        setQuestions(shuffle(props.choice.conjugations))
        setLoading(true)
    }, [props.choice.conjugations])

    const handleChange = (e) => {
        const { value } = e.target
        setUserAns(value)
    }

    // Check answer
    const checkAns = () => {
        if (userAns === "") {
            return
        }
        else {
            const ansExists = searchAnsArr(questions[questionIndex].answer, userAns)
            if (ansExists) {
                setColour("green")
                questions[questionIndex]["ans"] = "true"
            } else {
                setColour("red")
                questions[questionIndex]["ans"] = "false"
            }
            setFeedback(true)
        }

    }

    // Convert all answers to lower case and search to see if exists
    const searchAnsArr = (arr, str) => {
        const lowerCaseArr = arr.map(item => item.toLowerCase())
        const lowerCaseStr = str.toLowerCase()
        return lowerCaseArr.includes(lowerCaseStr)
    }

    // Create the next question
    const nextQuestion = () => {
        if (questionIndex < questions.length -1) {
            setQuestionIndex(prevVal => prevVal +1)
            setFeedback(false)
            setColour("")
            setUserAns("")
        } else {
            setFinish(true)
        }
    }

    // From parent component, handles whether to show the 'home' screen.
    const handleActive = () => {
        props.handleActive()
    }

    return (
        <>{loading ? <div>
            {finish ? <FinishFlash verb={props.choice.infinitive_fre} results={questions} handleActive={handleActive} />
                :
                <div className="flashcard_container">
                    <p className="title">{props.choice.infinitive_fre} - {props.choice.verb}</p>
                    <p className="question" style={{ color: colour }}>{questions[questionIndex].question}</p>
                    <input type="text" className="answer" style={{ borderColor: colour }} value={userAns} onChange={handleChange} autoFocus />
                    {feedback ? <button className="next_btn" style={{border: `1px solid ${colour}`}} onClick={nextQuestion}>Next</button> : <button onClick={checkAns} className="ans_btn">Submit</button>}
                </div>
            }
        </div> : null}</>
    )
}

export default Flash