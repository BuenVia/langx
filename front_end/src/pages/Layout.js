import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

const Layout = () => {

  const date = new Date()
  const year = date.getFullYear()

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
        <p>Powered by <a className="footer__link" href="https://mjclifford.com" target="_blank" rel="noopener noreferrer">MJClifford.com</a></p>
        <p>&copy; {year} LangX. All rights reserved.</p>
      </footer>
        
    </>
  )
};

export default Layout;