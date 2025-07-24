import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import plants from './data/plants';
import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [added, setAdded] = useState({});

  // derive categories
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="plist">
      <header className="plist-header">
        <h2>Our Plants</h2>
        <span>Items in Cart: {cartCount}</span>
      </header>

      {categories.map(cat => (
        <section key={cat} className="category">
          <h3>{cat}</h3>
          <div className="grid">
            {plants
              .filter(p => p.category === cat)
              .map(plant => (
                <div key={plant.id} className="card">
                  <img src={plant.thumb} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>
                  <button
                    disabled={!!added[plant.id]}
                    onClick={() => {
                      dispatch(addItem(plant));
                      setAdded(prev => ({ ...prev, [plant.id]: true }));
                    }}
                  >
                    {added[plant.id] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
);
}