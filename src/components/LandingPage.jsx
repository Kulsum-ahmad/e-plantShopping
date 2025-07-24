import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="overlay" />
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Your Home for Lush, Healthy Greenery</p>
        <p>At Paradise Nursery, we curate the finest indoor plants to bring serenity and style to your space.</p>
        <button onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}