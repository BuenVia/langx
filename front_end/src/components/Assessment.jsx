import { useEffect, useState } from "react";
import axios from 'axios'

const Assessment = (props) => {

    const [assessment, setAssessment] = useState([])
    const [loading, setLoading] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [isActive, setIsActive] = useState(true)
    const [answer, setAnswer] = useState("")
    const [incorrect, setIncorrect] = useState("")

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/blogs/assess/${props.assessId}`
        const getBlog = async () => {
          try {
            await axios.get(url).then(res => setAssessment(res.data))
            setLoading(true)
          } catch (error) {
              console.error(error);
          }
        }
        getBlog()
      }, [])

      const handleChange = (e) => {
        const { value } = e.target
        setAnswer(value)
    }

      const handleCheck = () => {
        if (answer === assessment[questionIndex].answer) {
          setIncorrect("lightgreen")
          setTimeout(() => {
            setQuestionIndex((preVal) => {
              return preVal < assessment.length - 1? preVal + 1 : setIsActive(false);
            })
            setAnswer("")
            setIncorrect("")
          }, 1000)
        } else {
          setIncorrect("red")
          console.log("incorrect answer");
        }
      }

      const assessmentForm = () => {
        return (
            <div className="assessment__form">
                {isActive ? <p className="assessment__question">{assessment[questionIndex].question}</p> : "Well done!"}
                {isActive ? <input type="text" style={{color: incorrect}} onChange={handleChange} className="assessment__input" value={answer} autoFocus required/> : null}
                {isActive ? <button className="assessment__btn" onClick={handleCheck}>Submit</button> : <a href="/" className="learn-more">Home</a> }
            </div>
        )
      }

    return (
        <div>
            {loading && assessment.length > 0 ? assessmentForm() : null}
        </div>
    )
}

export default Assessment