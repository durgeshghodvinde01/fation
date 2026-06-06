import {Navbar} from './Components/Navbar';
import {Hero} from './Components/Hero';
import {Categories} from './Components/Categories';
import {ProductGrid} from './Components/ProductGrid';
import {Footer} from './Components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', margin: 0 }}>
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;