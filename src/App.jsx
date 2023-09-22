import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './pages/projects'
import About from './pages/about'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
