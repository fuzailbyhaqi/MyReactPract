import Header from "./components/Header";
import Company from "./pages/Company";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="body-bg">
      <Header />
      <Routes>
        <Route exact={false} path="/" element={<Home />} />
        <Route exact={false} path="/company" element={<Company />} />
        <Route exact={false} path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
