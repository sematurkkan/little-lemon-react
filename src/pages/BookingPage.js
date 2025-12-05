import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, onDateChange, onSubmit, isLoading, error }) {
  return (
    <main>
      <section className="booking-page">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">
          Join us for an unforgettable dining experience. Reserve your table today!
        </p>
        
        {isLoading && (
          <div style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#666'
          }}>
            Loading...
          </div>
        )}
        
        {error && (
          <div style={{
            padding: '20px',
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            color: '#721c24',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}
        
        <BookingForm 
          availableTimes={availableTimes}
          onDateChange={onDateChange}
          onSubmit={onSubmit}
          disabled={isLoading}
        />
      </section>
    </main>
  );
}

export default BookingPage;