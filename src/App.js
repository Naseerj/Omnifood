import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
