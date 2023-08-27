import './App.css';
import Contact from './Pages/ContactPage/Contact';
import Home from './Pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About';
import Services from './Components/Services';
import SharedLayout from './Components/SharedLayout';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  

  return (
    <>
      <ToastContainer position="top-center" />;
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
