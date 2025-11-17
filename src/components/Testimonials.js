function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: 'Michael Caldwell',
        rating: 5,
        comment: 'This is the best Mediterranean food that I ever had!'
      },
      {
        id: 2,
        name: 'Alan Chen',
        rating: 5,
        comment: 'My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.'
      },
      {
        id: 3,
        name: 'Casey Lan',
        rating: 5,
        comment: 'I\'ve had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.'
      },
      {
        id: 4,
        name: 'John Rosenbhim',
        rating: 5,
        comment: 'Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.'
      },
      {
        id: 5,
        name: 'Jim Reynor',
        rating: 5,
        comment: 'This place really refreshed me after a late night shift at the local supply depot.'
      },
      {
        id: 6,
        name: 'Brian Dean',
        rating: 5,
        comment: 'I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.'
      },
      {
        id: 7,
        name: 'Tyler Tobuaine',
        rating: 5,
        comment: 'The food here was fresh. I should try this place at least once if they live in Chicago.'
      },
      {
        id: 8,
        name: 'Jack Hu',
        rating: 5,
        comment: 'This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!'
      }
    ];
  
    return (
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.comment}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;