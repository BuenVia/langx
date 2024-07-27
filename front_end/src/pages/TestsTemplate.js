import { useEffect, useState } from "react";
import axios from 'axios'
import TestCard from '../components/TestCard'

const TestsTemplate = () => {

    const [testSection, setTestSection] = useState([])
    const [questionList, setQuestionList] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingTestSection, setLoadingTestSection] = useState(false)
    
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
        const sectionUrl = `http://127.0.0.1:8000/api/section${pathname}`
        const getTestSection = async () => {
            try {
                await axios.get(sectionUrl).then(res => setTestSection(res.data[0]))
                setLoadingTestSection(true)
            } catch (error) {
                console.error(error);
            }
        }
        getTestSection()
        getQuestionList()
    }, [])

    console.log(testSection);

    return (
    <>
        {loadingTestSection ? <p className="test__section__card">{testSection.instruction}</p> : null}
        {loading && questionList.length > 0 ? <TestCard testData={questionList} /> : "Whoops! The questions have not loaded."}
    </>
    )
}

export default TestsTemplate