import { useEffect, useState } from "react";
import axios from 'axios'
import TestCard from '../components/TestCard'

const TestsTemplate = () => {

    const [questionList, setQuestionList] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const pathname = window.location.pathname
        const url = `http://127.0.0.1:8000/api${pathname}`
        const getQuestionList = async () => {
            try {
                await axios.get(url).then(res => setQuestionList(res.data))
                setLoading(true)
            } catch (error) {
                console.error(error);
            }
        }
        getQuestionList()
    }, [])

    console.log(questionList);

    return (
    <>
        {loading && questionList.length > 0 ? <TestCard testData={questionList} /> : "Whoops! The questions have not loaded."}
    </>
    )
}

export default TestsTemplate