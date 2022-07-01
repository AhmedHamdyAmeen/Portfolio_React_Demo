import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Header from "./components/Header";
import Cover from "./components/Cover";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="head" className="App">
      <Header />
      <Cover />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
