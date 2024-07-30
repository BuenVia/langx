import { useState } from "react";
import '../css/testcard.css';
import TypeOne from "./TypeOne";
import TypeTwo from "./TypeTwo";
import TypeThree from "./TypeThree";
import TypeFour from "./TypeFour";
import Finish from "./Finish";


const TestCard = (props) => {

    const [questions] = useState(props.testData)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState([])
    const [isActive, setIsActive] = useState(true)
    const [questionCard, setQuestionCard] = useState(true)
    const [feedback, setFeedback] = useState(null)

    const handleGo = (ans) => {
        if (!ans) {
            questions[questionIndex].result = "false"
            setFeedback(false)
        } else {
            questions[questionIndex].result = "true"
            setFeedback(true)
        }
        setAnswers((prevVals) => {
            return [
                ...prevVals,
                questions[questionIndex]
            ]
        })
        setQuestionCard(false)
    }
    
    const handleFeedback = () => {
        
        return (
            <>
                <p>{questions[questionIndex].question}</p>
                <p style={{ color: feedback ? "green" : "red" }}>{questions[questionIndex].answer}</p>
                <button className="test__btn" style={{ backgroundColor: feedback ? "green" : "red" }} onClick={handleNext}>Next</button>
            </>
        )
    }

    const handleNext = () => {
        setQuestionIndex((preVal) => {
            return preVal < questions.length - 1? preVal + 1 : setIsActive(false);
        })
        setQuestionCard(true)
        setFeedback(null)
    }


    const handleInput = (testObj) => {
        const type = testObj.test_type
        if (type === 1) {
            return <TypeOne checkAns={handleGo} testObj={testObj} />
        } else if (type === 2) {
            return <TypeTwo checkAns={handleGo} testObj={testObj} />
        } else if (type === 3) {
            return <TypeThree checkAns={handleGo} testObj={testObj} />
        } else if (type === 4) {
            return <TypeFour checkAns={handleGo} testObj={testObj} />
        } else {
            return "Error"
        }
    }


    return (
        <div className="test__card">
            {isActive ? 
            <div>
                {questionCard ? handleInput(questions[questionIndex]) : handleFeedback()}
            </div>
            :
            <Finish results={answers} />
        }
        </div>
    )
}

export default TestCard;