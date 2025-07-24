import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const count = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="hdr">
      <h1><Link to="/">Paradise Nursery</Link></h1>
      <nav>
        <Link to="/products">Plants</Link>
        <Link to="/cart">🛒 {count}</Link>
      </nav>
    </header>
  );
}