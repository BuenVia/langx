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
        <h2>Latest Articles</h2>
        <ul>
          
          <h1>WRITE CODE TO SHOW ARTICLES HERE</h1>
          <h3>wRITE CODE TO SHOW TESTS ON THE MAIN SECTION</h3>
          
          <li><a href="#article1">Article 1</a></li>
          <li><a href="#article2">Article 2</a></li>
          <li><a href="#article3">Article 3</a></li>
        </ul>
      </aside>
    );
  };

  export default Sidebar;