import { useState } from 'react';

function BookingForm({ availableTimes, onDateChange, onSubmit, disabled }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: 'Birthday'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate individual fields
  const validateField = (name, value) => {
    let fieldError = '';

    switch (name) {
      case 'date':
        if (!value) {
          fieldError = 'Date is required';
        } else {
          // Check if date is in the future
          const selectedDate = new Date(value + 'T00:00:00');
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          if (selectedDate < today) {
            fieldError = 'Date must be in the future';
          }
        }
        break;

      case 'time':
        if (!value) {
          fieldError = 'Time is required';
        }
        break;

      case 'guests':
        const guestNum = parseInt(value);
        if (!value) {
          fieldError = 'Number of guests is required';
        } else if (isNaN(guestNum)) {
          fieldError = 'Please enter a valid number';
        } else if (guestNum < 1) {
          fieldError = 'At least 1 guest is required';
        } else if (guestNum > 10) {
          fieldError = 'Maximum 10 guests allowed';
        }
        break;

      case 'occasion':
        if (!value) {
          fieldError = 'Please select an occasion';
        }
        break;

      default:
        break;
    }

    return fieldError;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    
    newErrors.date = validateField('date', formData.date);
    newErrors.time = validateField('time', formData.time);
    newErrors.guests = validateField('guests', formData.guests);
    newErrors.occasion = validateField('occasion', formData.occasion);

    return newErrors;
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.date &&
      formData.time &&
      formData.guests &&
      formData.occasion &&
      !errors.date &&
      !errors.time &&
      !errors.guests &&
      !errors.occasion
    );
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Form field changed: ${name} = ${value}`);

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });

    // Mark field as touched
    setTouched({
      ...touched,
      [name]: true
    });

    // Validate field
    const fieldError = validateField(name, value);
    setErrors({
      ...errors,
      [name]: fieldError
    });

    // If date changed, fetch new times
    if (name === 'date' && value) {
      console.log('Date selected, fetching times:', value);
      onDateChange(value);
    }
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name } = e.target;
    console.log(`Field blurred: ${name}`);

    setTouched({
      ...touched,
      [name]: true
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Validate all fields
    const newErrors = validateForm();
    setErrors(newErrors);

    // Mark all fields as touched
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true
    });

    // Check if form is valid
    if (Object.values(newErrors).some(error => error)) {
      console.error('Form has errors, cannot submit');
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        date: formData.date,
        time: formData.time,
        guests: parseInt(formData.guests),
        occasion: formData.occasion
      };

      console.log('Submitting booking:', bookingData);
      onSubmit(bookingData);

      // Reset form on successful submission
      setFormData({
        date: '',
        time: '',
        guests: '1',
        occasion: 'Birthday'
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Add these ARIA attributes to your form inputs:

<form 
  onSubmit={handleSubmit} 
  className="booking-form"
  aria-label="Restaurant reservation form"
>
  
  <div className="form-group">
    <label htmlFor="date">
      Date <span className="required" aria-label="required">*</span>
    </label>
    <input
      type="date"
      id="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      onBlur={handleBlur}
      required
      className={`form-input ${touched.date && errors.date ? 'input-error' : ''}`}
      disabled={disabled || isSubmitting}
      aria-label="Select reservation date, required field"
      aria-invalid={touched.date && !!errors.date}
      aria-describedby={touched.date && errors.date ? 'date-error' : ''}
      aria-required="true"
    />
    {touched.date && errors.date && (
      <span 
        className="error-message" 
        id="date-error"
        role="alert"
        aria-live="polite"
      >
        {errors.date}
      </span>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="time">
      Time <span className="required" aria-label="required">*</span>
    </label>
    <select
      id="time"
      name="time"
      value={formData.time}
      onChange={handleChange}
      onBlur={handleBlur}
      required
      className={`form-input ${touched.time && errors.time ? 'input-error' : ''}`}
      disabled={disabled || isSubmitting}
      aria-label="Select reservation time, required field"
      aria-invalid={touched.time && !!errors.time}
      aria-describedby={touched.time && errors.time ? 'time-error' : ''}
      aria-required="true"
    >
      <option value="">Select a time</option>
      {availableTimes && availableTimes.length > 0 ? (
        availableTimes.map((timeSlot) => (
          <option key={timeSlot} value={timeSlot}>
            {timeSlot}
          </option>
        ))
      ) : (
        <option disabled>No available times</option>
      )}
    </select>
    {touched.time && errors.time && (
      <span 
        className="error-message" 
        id="time-error"
        role="alert"
        aria-live="polite"
      >
        {errors.time}
      </span>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="guests">
      Number of Guests <span className="required" aria-label="required">*</span>
    </label>
    <input
      type="number"
      id="guests"
      name="guests"
      value={formData.guests}
      onChange={handleChange}
      onBlur={handleBlur}
      min="1"
      max="10"
      required
      className={`form-input ${touched.guests && errors.guests ? 'input-error' : ''}`}
      disabled={disabled || isSubmitting}
      aria-label="Number of guests, required field, between 1 and 10"
      aria-invalid={touched.guests && !!errors.guests}
      aria-describedby={`${touched.guests && errors.guests ? 'guests-error' : ''} guests-help`}
      aria-required="true"
    />
    <small className="help-text" id="guests-help">
      Enter a number between 1 and 10 guests
    </small>
    {touched.guests && errors.guests && (
      <span 
        className="error-message" 
        id="guests-error"
        role="alert"
        aria-live="polite"
      >
        {errors.guests}
      </span>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="occasion">
      Occasion <span className="optional" aria-label="optional">(Optional)</span>
    </label>
    <select
      id="occasion"
      name="occasion"
      value={formData.occasion}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`form-input ${touched.occasion && errors.occasion ? 'input-error' : ''}`}
      disabled={disabled || isSubmitting}
      aria-label="Select occasion for your reservation"
      aria-invalid={touched.occasion && !!errors.occasion}
      aria-describedby={touched.occasion && errors.occasion ? 'occasion-error' : ''}
    >
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
      <option value="Other">Other</option>
    </select>
    {touched.occasion && errors.occasion && (
      <span 
        className="error-message" 
        id="occasion-error"
        role="alert"
        aria-live="polite"
      >
        {errors.occasion}
      </span>
    )}
  </div>

  <button
    type="submit"
    className="submit-btn"
    disabled={disabled || isSubmitting || !isFormValid()}
    aria-disabled={!isFormValid()}
    aria-label={isFormValid() ? 'Click to complete your reservation' : 'Fill in all required fields to submit reservation'}
  >
    {isSubmitting ? 'Submitting...' : 'Complete Reservation'}
  </button>
</form>
  );
}

export default BookingForm;