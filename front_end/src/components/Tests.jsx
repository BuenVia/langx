import { useEffect, useState } from "react";
import axios from 'axios'
import TestCard from './TestCard'

const Tests = (props) => {

  const [testList, setTestList] = useState([])
  const [questionList, setQuestionList] = useState([])

  // Get the test sections list
  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/tests/${props.testId}`
    const getTestList = async () => {
        try {
            await axios.get(url).then(res => setTestList(res.data))
        } catch (error) {
            console.error(error);
        }
    }
    getTestList()
  }, [props.testId])

  // Get the questions for selected test section
  const getTestList = async (id) => {
    const url = `http://127.0.0.1:8000/api/questions/${id}`
      try {
          await axios.get(url).then(res => setQuestionList(res.data))
      } catch (error) {
          console.error(error);
      }
  }

  const handleClick = (e) => {
    const {value} = e.target
    getTestList(value)
  }

    return (
      <>
        <div>
          {testList.map(test => {
            return <button key={test.id} value={test.id} className="btn btn-info" onClick={handleClick}>{test.name}</button>
          })}
        </div>
        <div>
          {questionList.length > 0 ? <TestCard testData={questionList} /> : "Please select a test"}
        </div>
      </>
    );
  };
  
  export default Tests;