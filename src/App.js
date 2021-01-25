// Import useEffect to change document title
import { useEffect } from 'react';

// Import scss style sheet
import './scss/styles.scss';

// Import components to be rendered
// Global
import Nav from "./components/global/Nav"
import MobileNav from "./components/global/MobileNav"
import Footer from "./components/global/Footer"
// Hero
import Welcome from "./components/hero/Welcome"
import Info from "./components/hero/Info"
// Products
import ProductsContainer from "./components/products/ProductsContainer"

function App() {

  // Change document title
  useEffect(() => {
   document.title = "Liqid Coding Challenge"
  }, []);

  return (
    <div className="App">
      {/* Nav */}
      <Nav user="LIQID" />
      <MobileNav user="LIQID" />
      {/* Hero */}
      <div className="hero">
        <Welcome />
        <Info />
      </div>
      {/* Products */}
      <ProductsContainer />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
