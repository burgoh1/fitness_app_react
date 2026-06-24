import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Nutrition from './pages/Nutrition';
import Exercise from './pages/Exercise';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
