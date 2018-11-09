import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import './styles.scss';

const NavigationBar = ({ userAuthenticated, logout, history }) => (
  <Navbar color="light" expand="md" className="main-nav">
    <Link to="/" className="navbar-brand">Klika React Template</Link>
    <NavbarToggler onClick={() => {}} />
    <Collapse isOpen={false} navbar>
      <Nav className="ml-auto" navbar>
        {userAuthenticated && (
          <NavItem>
            <button
              type="button"
              className="nav-link"
              onClick={() => {
                logout();
                localStorage.removeItem('session');
                history.push('/login');
              }}
            >
              Logout
            </button>
          </NavItem>
        )}
        {!userAuthenticated && (
          <NavItem>
            <Link to="/login" className="nav-link">Login</Link>
          </NavItem>
        )}
        {!userAuthenticated && (
          <NavItem>
            <Link to="/register" className="nav-link">Register</Link>
          </NavItem>
        )}
      </Nav>
    </Collapse>
  </Navbar>
);

NavigationBar.propTypes = {
  userAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
};

export default NavigationBar;
