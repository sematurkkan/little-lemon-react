import React from 'react';
// import Food from "./assets/food.jpeg"

function Highlight() {
    return (
      <main>
        <section className="highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h1>Little Lemon Chicago</h1>
              <p>
                We are a family owned Mediterranean restaurant, located on Maidove Street in Chicago, Illinois. 
                We focus on traditional recipes served with a modern twist.
              </p>
              <button className="reserve-btn">Reserve a table</button>
            </div>
            <div className="highlight-image">
              <img 
                src={"assets/food.jpeg"}
                alt="Delicious Mediterranean food" 
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Highlight;