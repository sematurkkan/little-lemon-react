// Main.js
import React from 'react';


function Specials() {
    const specialDishes = [
      {
        id: 1,
        name: 'Greek Salad',
        price: '$12.99',
        description: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.',
        image: '/assets/greek-salad.jpeg'
      },
      {
        id: 2,
        name: 'Bruschetta',
        price: '$16.99',
        description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.',
        image: '/assets/bruschetta.jpeg'
      },
      {
        id: 3,
        name: 'Lemon Dessert',
        price: '$8.50',
        description: 'Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.',
        image: '/assets/lemon-dessert.jpeg'
      }
    ];
  
    return (
      <section className="specials">
        <div className="specials-grid">
          {specialDishes.map((dish) => (
            <article key={dish.id} className="dish-card">
              <img src={dish.image} alt={dish.name} />
              <div className="dish-info">
                <div className="dish-header">
                  <h3>{dish.name}</h3>
                  <span className="price">{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <button className="order-btn">Order for Delivery</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
  
  export default Specials;