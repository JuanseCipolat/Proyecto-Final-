import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li><NavLink exact to="/" activeClassName="activo">Home</NavLink></li>
          <li><NavLink to="/noticias" activeClassName="activo">Noticias</NavLink></li>
          <li><NavLink to="/retro" activeClassName="activo">Retro</NavLink></li>
          <li><NavLink to="/reviews" activeClassName="activo">Reviews</NavLink></li>
          <li><NavLink to="/shop" activeClassName="activo">Shop</NavLink></li>
          <li><NavLink to="/contacto" activeClassName="activo">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
