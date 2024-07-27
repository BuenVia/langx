import { useEffect, useState } from "react";
import axios from 'axios'
import '../css/dashboard.css';
import Sidebar from "../components/Sidebar";
import TestButtons from "../components/TestButtons";

const Dashboard = () => {

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
                                <div className="card__title">
                                    <h2>{blog.name}</h2>
                                </div>
                                <p>words for people or things...</p>
                                <div className="card__test__btns">
                                    <TestButtons testId={blog.id} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
  };
  
  export default Dashboard;