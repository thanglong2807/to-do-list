// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import ActiveMenu from './components/ActiveMenu';
import Below from './components/Below';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Iffame from './components/Iffame';
import Portfolio from './components/Portfolio';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Website from './components/Website';

function App() {
  return (
    <div className="App">
      <Header />
      <ActiveMenu />

      <Home />
      <About />
      <Services />
      <Website />
      <Portfolio />
      <Below />
      <Iffame />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
