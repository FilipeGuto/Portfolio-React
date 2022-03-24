import About from "../src/Components/About/About";
import "./App.css";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";
import Home from "../src/Components/Home/Home";
import Project from "../src/Components/Project/Project";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
