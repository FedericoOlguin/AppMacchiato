import Home from './Pages/Home';
import NavBar from "./components/NavBar"
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
