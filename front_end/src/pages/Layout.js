import { Outlet, Link } from "react-router-dom";

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
        
    </>
  )
};

export default Layout;