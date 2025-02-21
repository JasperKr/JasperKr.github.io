import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import Home from './Pages/Home'; // Assuming you have a Home component
import Navbar from './Navbar'; // Assuming you have a Navbar component
import About from './Pages/About';
import Contact from './Pages/Contact';
// import WebGLBackground from './Background';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="h-16"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;