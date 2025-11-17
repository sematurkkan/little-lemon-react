import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
// import Order from '../pages/Order';
// import Login from '../pages/Login';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<BookingPage />} />
      {/* <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default Main;