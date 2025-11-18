import { useState } from 'react';

function BookingForm({ availableTimes, onDateChange }) {
  // Form state variables
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: 'Birthday'
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If date changed, call the onDateChange function
    if (name === 'date') {
      onDateChange(value);
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    // Submit the reservation
    console.log('Reservation submitted:', formData);
    alert(`Reservation confirmed for ${formData.date} at ${formData.time}`);
    
    // Reset form
    setFormData({
      date: '',
      time: '',
      guests: '1',
      occasion: 'Birthday'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      
      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="date">
          Date <span className="required">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      {/* Time Field */}
      <div className="form-group">
        <label htmlFor="time">
          Time <span className="required">*</span>
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>

      {/* Number of Guests Field */}
      <div className="form-group">
        <label htmlFor="guests">
          Number of Guests <span className="required">*</span>
        </label>
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
        />
      </div>

      {/* Occasion Field */}
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="form-input"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">
        Complete Reservation
      </button>
    </form>
  );
}

export default BookingForm;