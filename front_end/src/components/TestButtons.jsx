import { useEffect, useState } from "react";
import axios from 'axios'

const TestButtons = (props) => {

    const [testList, setTestList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/tests/${props.testId}`
        const getTestList = async () => {
            try {
                await axios.get(url).then(res => setTestList(res.data))
                setLoading(true)
            } catch (error) {
                console.error(error);
            }
        }
        getTestList()
      }, [props.testId])

      const buttonList = () => {
        return testList.map(test => {
            return <a key={test.id} className="learn-more" href={`questions/${test.id}`}>{test.name}</a>
        })
      }

      return <div>
        {loading ? buttonList() : "NULL"}
      </div>
}

export default TestButtons