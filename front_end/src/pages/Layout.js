import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-link"><div className="navbar-logo">LangX</div></a>
        <ul className="navbar-menu">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
    </nav>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 LangX. All rights reserved.</p>
      </footer>
        
    </>
  )
};

export default Layout;