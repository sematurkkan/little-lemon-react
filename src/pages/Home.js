import Highlight from '../components/Highlight';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Specials from '../components/Specials';

function Home() {
  return (
    <main>
      <Highlight />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Home;