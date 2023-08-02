import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Footer from "./Footer/Footer";
import Plans from "./Plans/Plans";
import Landingpage from "./Landinpage/Landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
         <Route path="/plans" element={ <Plans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
