import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../CartSlice';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>Total Items: {totalQty}</p>
      <p>Total Cost: ₹{totalCost}</p>

      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map(i => (
        <div key={i.id} className="cart-item">
          <img src={i.thumb} alt={i.name} />
          <div>
            <h4>{i.name}</h4>
            <p>₹{i.price}</p>
            <div className="qty-controls">
              <button onClick={() => dispatch(decrease(i.id))}>–</button>
              <span>{i.quantity}</span>
              <button onClick={() => dispatch(increase(i.id))}>+</button>
            </div>
            <button onClick={() => dispatch(remove(i.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="cart-actions">
        <button onClick={() => alert('Coming Soon!')}>
          Checkout
        </button>
        <button onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartPage;