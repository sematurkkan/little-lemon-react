import { useState } from 'react';

function BookingForm({ availableTimes, onDateChange, onSubmit, disabled }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: 'Birthday'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      onDateChange(value);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    const bookingData = {
      date: formData.date,
      time: formData.time,
      guests: parseInt(formData.guests),
      occasion: formData.occasion
    };

    onSubmit(bookingData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      
      <div className="form-group">
        <label htmlFor="date">Date <span className="required">*</span></label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
          disabled={disabled || isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time <span className="required">*</span></label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="form-input"
          disabled={disabled || isSubmitting}
        >
          <option value="">Select a time</option>
          {availableTimes?.length > 0 ? (
            availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))
          ) : (
            <option disabled>No available times</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests <span className="required">*</span></label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
          className="form-input"
          disabled={disabled || isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="form-input"
          disabled={disabled || isSubmitting}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={disabled || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Complete Reservation'}
      </button>
    </form>
  );
}

export default BookingForm;