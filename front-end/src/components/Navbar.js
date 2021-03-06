import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Navbar.css';

const Navbar = ({ name, activeTab }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li className={ activeTab === 1 ? 'navbar-active' : undefined }>
            <Link
              data-testid="customer_products__element-navbar-link-products"
              to="/customer/products"
            >
              Produtos
            </Link>
          </li>
          <li
            className={ activeTab === 2 ? 'navbar-active' : undefined }
            data-testid="customer_products__element-navbar-link-orders"
          >
            <Link to="/customer/orders">
              Meus Pedidos
            </Link>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            { name || ''}
          </li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ logout }
            type="button"
          >
            Sair
          </button>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.number.isRequired,
};

Navbar.defaultProps = {
  name: '',
};

export default Navbar;
