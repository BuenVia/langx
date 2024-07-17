import { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

    const [concepts, setConcepts] = useState([])

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api"
        const getConcepts = async () => {
            try {
                await axios.get(url).then(res => setConcepts(res.data))
            } catch (error) {
                console.error(error);
            }
        }
        getConcepts()
    }, [])

    return (<div>
        {concepts.map(concept => {
            return <p>{concept.name}</p>
        })}
    </div>);
  };
  
  export default Home;