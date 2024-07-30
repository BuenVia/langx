import { useEffect, useState } from "react";
import axios from 'axios'
import '../css/dashboard.css';
import Sidebar from "../components/Sidebar";
import Category from "../components/Category";

const Dashboard = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/category"
        const getBlogs = async () => {
            try {
                await axios.get(url).then(res => setCategories(res.data))
                setLoading(true)
            } catch (error) {
                console.error(error);
            }
        }
        getBlogs()
    }, [])

    return (
        <div className="container p-3">
            <header className="header">
                <h1 className="title">LearnX</h1>
                <p className="tagline">"Personalise Your Learning"</p>
            </header>

            <div className="content">

            <Sidebar />
            {loading ?                 
                    <div className="main-section">
                        {categories.map(category => {
                            return (
                                <Category key={category.id} category={category} />
                            )
                        })}
                    </div>
                : null}
            </div>
        </div>
    );
  };
  
  export default Dashboard;