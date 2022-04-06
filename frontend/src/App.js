import Home from './Pages/Home';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProductsIndex from './components/ProductsIndex';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
        <ProductsIndex />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
