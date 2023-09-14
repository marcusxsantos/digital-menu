import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import DigitalMenu from "./pages/DigitalMenu";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/digital-menu/:id" element={<DigitalMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}