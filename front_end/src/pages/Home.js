import { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/blogs/"
        const getBlogs = async () => {
            try {
                await axios.get(url).then(res => setBlogs(res.data))
            } catch (error) {
                console.error(error);
            }
        }
        getBlogs()
    }, [])

    return (<div className="container p-3">
        {blogs.map(blog => {
            return (
                <div key={blog.id} className="card">
                    <div className="card-header">
                        <h4>{blog.name}</h4>
                    </div>
                    <div className="card-body">
                        <p>Description of the concept</p>
                        <div className="btn-container">
                            <a className="btn btn-success" href={`blogs/${blog.id}`}>Learn</a>
                            {/* <a className="btn btn-primary" href={`flash/${blog.id}`}>Practice</a> */}
                        </div>
                    </div>


                </div>
            )
        })}
    </div>);
  };
  
  export default Home;