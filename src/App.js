
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
// import Highlight from './components/Highlight';
// import Testimonials from './components/Testimonials';
// import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <>
    <Header />
    <Nav />
    {/* <Highlight/> */}
    <Main />
    {/* <Testimonials/>
    <About/> */}
    <Footer />

    </>
    </BrowserRouter>
  );
}

export default App;
