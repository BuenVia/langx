import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import axios from 'axios'
import Flash from "./Flash";

const Blogs = () => {
  
  const [blog, setBlog] = useState({})

  useEffect(() => {
    const pathname = window.location.pathname
    const url = `http://127.0.0.1:8000/api${pathname}`
    const getBlog = async () => {
      try {
        await axios.get(url).then(res => setBlog(res.data[0]))
      } catch (error) {
          console.error(error);
      }
    }
    getBlog()
  }, [])

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>{blog.name}</h3>
            <p>By {blog.author}</p>
          </div>
          <div className="card-body">
            <ReactMarkdown children={blog.body} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
        <div className="card">
        <div className="card-header">
          <h3>Tests</h3>
        </div>
        <div className="card-body">
          <Flash testId={blog.id} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;