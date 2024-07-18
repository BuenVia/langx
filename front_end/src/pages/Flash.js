import { useEffect, useState } from "react";
import axios from 'axios'

const Flash = (props) => {

  const [testList, setTestList] = useState([])

  useEffect(() => {

    const url = `http://127.0.0.1:8000/api/tests/`
    const getTestList = async () => {
        try {
            await axios.get(url).then(res => setTestList(res.data))
        } catch (error) {
            console.error(error);
        }
    }
    getTestList()
  }, [])

  console.log(testList);

    return (
      <>
        {testList.map(test => {
          return <button>{test.name}</button>
        })}
      </>
    );
  };
  
  export default Flash;