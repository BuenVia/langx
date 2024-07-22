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
    const [isActive, setIsActive] = useState(true)

    const handleGo = (ans) => {
        setQuestionIndex((preVal) => {
            return preVal < questions.length - 1? preVal + 1 : setIsActive(false);
        })
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
            handleInput(questions[questionIndex])
            :
            <Finish />
        }
        </div>
    )
}

export default TestCard;