import BookingForm from '../components/BookingForm';

function BookingPage() {
  return (
    <main>
      <section className="booking-page">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">
          Join us for an unforgettable dining experience. Reserve your table today!
        </p>
        <BookingForm />
      </section>
    </main>
  );
}

export default BookingPage;