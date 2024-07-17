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
            return (
                <div className="card">
                    <div className="card-head">
                        <h4>{concept.name}</h4>
                    </div>
                    <div className="card-body">
                        <p>Description of the concept</p>
                        <a href={`blogs/${concept.id}`}>Learn</a>
                        <a href={`flash/${concept.id}`}>Practice</a>
                    </div>


                </div>
            )
        })}
    </div>);
  };
  
  export default Home;