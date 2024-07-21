import { useEffect, useState } from "react";
import axios from 'axios'

const Assessment = (props) => {

    const [assessment, setAssessment] = useState([])
    const [loading, setLoading] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [isActive, setIsActive] = useState(true)

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

      const handleCheck = () => {
        setQuestionIndex((preVal) => {
            return preVal < assessment.length - 1? preVal + 1 : setIsActive(false);
        })
      }

      const assessmentForm = () => {
        return (
            <div>
                <p>{isActive ? assessment[questionIndex].question : null}</p>
                {isActive ? <input type="text" /> : null}
                {isActive ? <button onClick={handleCheck}>Submit</button> : null }
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