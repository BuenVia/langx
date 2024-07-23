import { useEffect, useState } from "react";
import axios from 'axios'
import '../css/home.css';
import Sidebar from "../components/Sidebar";
import TestButtons from "../components/TestButtons";

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

                <a href="/french" className="btn">Dashboard</a>
                
            </div>
        </div>
    );
  };
  
  export default Home;