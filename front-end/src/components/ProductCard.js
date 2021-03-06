import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    if (quantity === 0) {
      return removeFromCart(id);
    }
    addToCart({ id, name, unitPrice: price, quantity });
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="card">
      <div className="card-image">
        <span
          className="price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`${price.replace('.', ',')}`}
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="product"
        />
      </div>
      <div className="card-legend">
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
        <div className="card-input-container">
          <button
            onClick={ decreaseQuantity }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
          >
            -
          </button>
          <input
            type="number"
            step={ 1 }
            min={ 0 }
            className="quantity"
            onInput={ (e) => setQuantity(e.target.value) }
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            onClick={ increaseQuantity }
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
