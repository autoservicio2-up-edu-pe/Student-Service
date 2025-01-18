import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buscar } from "./pages/Buscar";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Buscar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
