import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import axios from 'axios'
import '../css/blog.css';
import Assessment from "../components/Assessment";

const Blogs = () => {
  
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState({})

  useEffect(() => {
    const pathname = window.location.pathname
    const url = `http://127.0.0.1:8000/api${pathname}`
    const getBlog = async () => {
      try {
        await axios.get(url).then(res => setBlog(res.data[0]))
        setLoading(true)
      } catch (error) {
          console.error(error);
      }
    }
    getBlog()
  }, [])

    return (
      <div className="blog__container">

        <div className="card__blog">
            <h3>{blog.name}</h3>
            <p>By {blog.author}</p>
            <ReactMarkdown children={blog.body} remarkPlugins={[remarkGfm]} />
        </div>

        <div className="card__blog">
          <h3>Tests</h3>
          {loading ? <Assessment assessId={blog.id} /> : null}
        </div>

      </div>
    );
  };
  
  export default Blogs;