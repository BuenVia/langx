import { useEffect, useState } from "react";
import axios from 'axios'
import Sidebar from "../components/Sidebar";

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

    return (
        <div className="container p-3">
            <header className="header">
                <h1 className="title">LangX</h1>
                <p className="tagline">"Unlock the World with Words"</p>
            </header>

            <div className="content">

                <Sidebar />

                <div className="main-section">
                    {blogs.map(blog => {
                        return (
                            <div key={blog.id} className="card">
                                <h2>{blog.name}</h2>
                                <p>words for people or things...</p>
                                <a className="btn btn-success" href={`blogs/${blog.id}`}><button className="learn-more">Learn</button></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
  };
  
  export default Home;