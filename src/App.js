
// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
// // import Highlight from './components/Highlight';
// // import Testimonials from './components/Testimonials';
// // import About from './components/About';

// function App() {
//   return (
//     <BrowserRouter>
//     <>
//     <Header />
//     <Nav />
//     <Main />
//     <Footer />
//     </>
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    // Wait for API to load
    const checkAPI = setInterval(() => {
      if (typeof window.fetchAPI === 'function' && typeof window.submitAPI === 'function') {
        console.log('✓ API Ready');
        setApiReady(true);
        clearInterval(checkAPI);
      }
    }, 100);

    // Stop checking after 5 seconds and render anyway
    const timeout = setTimeout(() => {
      clearInterval(checkAPI);
      setApiReady(true);
    }, 5000);

    return () => {
      clearInterval(checkAPI);
      clearTimeout(timeout);
    };
  }, []);

  // Don't render app until API is ready
  if (!apiReady) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#495e57',
        color: '#f4ce14',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;