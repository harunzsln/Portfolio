import React from 'react';
import './App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Social from './components/Social';

/*import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';*/

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <About />
      <Social />
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
