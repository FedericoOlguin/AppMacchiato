import Home from './Pages/Home';
/* import NavBar from "./components/NavBar" */
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from '../../frontend/src/components/SignUp';
import SignIn from '../../frontend/src/components/SignIn';

function App(props) {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>

        <Route path='*' element={<Home />} />{" "}
        <Route path='/' element={<Home />} />
        <Route  path='/signUp' element={props.user ? <Navigate replace to='/'/> : <SignUp />} />
        <Route  path='/signIn' element={props.user ? <Navigate replace to='/'/> : <SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
