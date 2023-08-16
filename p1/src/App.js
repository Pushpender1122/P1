
import './App.css';
import About from './component/about';
import Contact from './component/contact';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Services from './component/services';
import Work from './component/work';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
