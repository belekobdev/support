import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Course from "./components/Course";
import About from "./components/About";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Course/>
        <About/>
        <Start/>
      <Footer/>
    </div>
  );
}

export default App;
