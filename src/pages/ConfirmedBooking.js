import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <main>
      <section className="confirmed-booking">
        <div className="confirmation-container">
          <div className="confirmation-icon">✓</div>
          
          <h1>Booking Confirmed!</h1>
          
          <p className="confirmation-message">
            Thank you for your reservation. Your table has been successfully booked.
          </p>
          
          <div className="confirmation-details">
            <p>
              A confirmation email has been sent to your email address with all the details of your reservation.
            </p>
            <p>
              We look forward to welcoming you at Little Lemon!
            </p>
          </div>
          
          <div className="confirmation-actions">
            <Link to="/" className="btn-home">
              Back to Home
            </Link>
            <Link to="/booking" className="btn-new-booking">
              Make Another Reservation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;