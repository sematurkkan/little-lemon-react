import { useState } from 'react';

function BookingForm() {
  // Available times for reservation
  const [availableTimes] = useState([
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00'
  ]);

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