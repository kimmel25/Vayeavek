import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/homepage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';
import HaskamosPage from './pages/HaskamosPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/haskamos" element={<HaskamosPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;