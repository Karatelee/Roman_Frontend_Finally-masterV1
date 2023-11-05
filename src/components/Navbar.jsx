import { Link } from "react-router-dom";
import "../scss/styles.scss"

const Navbar = () => {
  const routes = [
    <div className='nav'>
        <a className='nav-item' href="/">HOME</a>
        <a className='nav-item' href="/dishes">MENU</a>
        <a className='nav-item' href="/about">ABOUT US</a>
        <a className='nav-item' href="/cart">CART</a>
        <a className='nav-item' href="/register">Register</a>
        <a className='nav-item' href="/login">Login</a>
        <a className='nav-item' href="/profile">Profile</a>
      </div>
  ];

  return (
    <>
      <div>
            <a className='nav-item' href="/">HOME</a>
            <a className='nav-item' href="/dishes">MENU</a>
            <a className='nav-item' href="/about">ABOUT US</a>
            <a className='nav-item' href="/cart">CART</a>
            <a className='nav-item' href="/register">Register</a>
            <a className='nav-item' href="/login">Login</a>
            <a className='nav-item' href="/profile">Profile</a>
          </div>
          <nav>
        <ul>
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                {route.path === "/login" || route.path === "/register" ? (
                  <Link to={route.path}>{route.title}</Link>
                ) : (
                  <Link to={route.path}>{route.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
