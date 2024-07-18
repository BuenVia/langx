import { useState } from "react";


const TestCard = (props) => {

    const [questions] = useState(props.testData)
    const [questionIndex, setQuestionIndex] = useState(0)

    const handleGo = () => {
        setQuestionIndex((preVal) => {
            return preVal < questions.length ? preVal + 1 : null;
        })
    }

    const handleInput = (testObj) => {
        const type = testObj.test_type
        if (type === 1) {
            return <input type="text"></input>
        } else if (type === 2) {
            const opt_list = [testObj.option_one, testObj.opt_two, testObj.opt_three]
            opt_list.map(opt=> {
                console.log(opt);
                return <button value={false}>{opt}</button>
            })
        } else if (type === 3) {
            return "3"
        } else {
            return "error"
        }
    }

    return (
        <>
            {questions[questionIndex].instruction ? questions[questionIndex].instruction : null}
            <p>{questions[questionIndex].question}</p>
            {handleInput(questions[questionIndex])}
            <button onClick={handleGo}>Go</button>
        </>
    )
}

export default TestCard;