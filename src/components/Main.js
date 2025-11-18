import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import Order from '../pages/Order';
import Login from '../pages/Login';

// Export for testing
export function initializeTimes() {
  return [
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
  ];
}

// Export for testing
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return state;
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
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
            />
          } 
        />
        {/* <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default Main;