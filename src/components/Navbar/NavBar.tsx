import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Main</Link>
    <Link to="/characters">Heroes</Link>
    <Link to="/location">Locations</Link>
    <Link to="/episode">Episodes</Link>
    <Link to="/login">Login</Link>
  </nav>
);