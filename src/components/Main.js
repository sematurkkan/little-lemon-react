import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
// import Order from '../pages/Order';
// import Login from '../pages/Login';

function Main() {
  const navigate = useNavigate();
  
  // State
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial times
  useEffect(() => {
    console.log('useEffect: Loading initial times');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    try {
      const times = window.fetchAPI(formattedDate);
      setAvailableTimes(times);
      setError(null);
    } catch (err) {
      console.error('Error loading times:', err);
      setError('Failed to load available times');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle date change
  const handleDateChange = (selectedDate) => {
    console.log('handleDateChange:', selectedDate);
    if (!selectedDate) return;
    
    setIsLoading(true);
    try {
      const times = window.fetchAPI(selectedDate);
      setAvailableTimes(times);
      setError(null);
    } catch (err) {
      console.error('Error loading times:', err);
      setError('Failed to load available times');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (formData) => {
    console.log('handleSubmit:', formData);
    setIsLoading(true);
    
    try {
      const result = window.submitAPI(formData);
      
      if (result) {
        console.log('Booking success!');
        navigate('/confirmed');
      } else {
        setError('Failed to book. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              error={error}
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default Main;