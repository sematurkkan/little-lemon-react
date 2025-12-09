import { Link } from 'react-router-dom';

function Highlight() {
  return (
    <section className="highlight" aria-label="Welcome and Featured Promotion">
      <div className="highlight-content">
        <div className="highlight-text">
          <h1>Little Lemon Chicago</h1>
          <p>
            We are a family owned Mediterranean restaurant, located on Maidove Street in Chicago, Illinois. 
            We focus on traditional recipes served with a modern twist.
          </p>
          <Link 
            to="/booking" 
            className="reserve-btn"
            aria-label="Click to reserve a table at our restaurant"
          >
            Reserve a table
          </Link>
        </div>
        <div className="highlight-image">
          <img 
            src="/assets/food5.jpeg" 
            alt="Selection of delicious Mediterranean dishes served at Little Lemon" 
          />
        </div>
      </div>
    </section>
  );
}

export default Highlight;