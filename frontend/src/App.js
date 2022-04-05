import Home from './Pages/Home';
/* import NavBar from "./components/NavBar" */
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Snackbar from "./components/Snackbar"

function App(props) {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>

        <Route path='*' element={<Home />} />{" "}
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={props.user ? <Navigate replace to='/' /> : <SignUp />} />
        <Route path='/signIn' element={props.user ? <Navigate replace to='/' /> : <SignIn />} />

      </Routes>
      <Snackbar />
    </BrowserRouter>
  );
}

export default App;
