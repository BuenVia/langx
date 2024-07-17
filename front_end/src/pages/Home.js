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

    return (<div className="container p-3">
        {concepts.map(concept => {
            return (
                <div className="card ">
                    <div className="card-header">
                        <h4>{concept.name}</h4>
                    </div>
                    <div className="card-body">
                        <p>Description of the concept</p>
                        <div className="btn-container">
                            <a className="btn btn-success" href={`blogs/${concept.id}`}>Learn</a>
                            <a className="btn btn-primary" href={`flash/${concept.id}`}>Practice</a>
                        </div>
                    </div>


                </div>
            )
        })}
    </div>);
  };
  
  export default Home;