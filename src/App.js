import About from "./pages/About";
import Acedmia from "./pages/Acedmia";
import Contact from "./pages/Contact";
import Experience from "./pages/Experince";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import { Projects } from "./pages/Projects";
import { Skill } from "./pages/Skill";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Acedmia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
