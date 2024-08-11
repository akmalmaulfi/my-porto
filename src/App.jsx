import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto overflow-x-hidden">
        <Navbar />
        <Hero />
        <Skill />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
