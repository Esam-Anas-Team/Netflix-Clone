import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import FavList from './components/FavList';
import Navbar from './components/Navbar';
import './App.css'


function App() {
  return (
    <div class="all">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
     
    </div>
  );
}

export default App;
