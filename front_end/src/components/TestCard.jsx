import { useState } from "react";
import TypeOne from "./TypeOne";
import TypeTwo from "./TypeTwo";
import TypeThree from "./TypeThree";
import TypeFour from "./TypeFour";
import Finish from "./Finish";


const TestCard = (props) => {

    const [questions] = useState(props.testData)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [isActive, setIsActive] = useState(true)

    const handleGo = () => {
        setQuestionIndex((preVal) => {
            console.log(preVal + 1, questions.length - 1);
            return preVal < questions.length - 1? preVal + 1 : setIsActive(false);
        })
    }

    const handleInput = (testObj) => {
        const type = testObj.test_type
        if (type === 1) {
            return <TypeOne testObj={testObj} />
        } else if (type === 2) {
            return <TypeTwo testObj={testObj} />
        } else if (type === 3) {
            return <TypeThree testObj={testObj} />
        } else if (type === 4) {
            return <TypeFour testObj={testObj} />
        } else {
            return "Error"
        }
    }


    return (
        <>
            {isActive ? 
            handleInput(questions[questionIndex])
            :
            <Finish />
        }
        {isActive ? <button onClick={handleGo}>Go</button> : <button>Finish</button> }
        </>
    )
}

export default TestCard;