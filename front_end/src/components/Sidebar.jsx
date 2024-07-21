import { useEffect, useState } from "react";
import axios from 'axios'

const Sidebar = () => {

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
      <aside className="sidebar">
        <h2>Learn Grammar</h2>
        <ul>
          
          {blogs.map(blog => {
            return <li key={blog.id}><a href={`blogs/${blog.id}`}>{blog.name}</a></li>
          })}
          
        </ul>
      </aside>
    );
  };

  export default Sidebar;