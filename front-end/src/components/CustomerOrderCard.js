import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/CustomerOrderCard.css';

const CustomerOrderCard = ({ order }) => {
  const { id, status, saleDate, totalPrice } = order;

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('pt-br');

  return (
    <Link to={ `/customer/orders/${order.id}` }>
      <div className="order-card">
        <div className="order-card-number">
          <p>Pedido</p>
          <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
        </div>
        <div className="order-card-status">
          <span
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </span>
        </div>
        <div className="order-card-info">
          <p
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {formatDate(saleDate)}
          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}
          </p>
        </div>
      </div>
    </Link>
  );
};

CustomerOrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerOrderCard;
