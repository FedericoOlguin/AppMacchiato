import Home from './Pages/Home';
import Shop from './Pages/Shop';
/* import NavBar from "./components/NavBar" */
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Snackbar from "./components/Snackbar"
import React, { useEffect } from 'react';
import userAction from './redux/actions/userAction';
import { connect } from "react-redux"
import AboutPage from './Pages/AboutPage';
import ErrorScreen from './components/ErrorScreen';
import Seetings from './Pages/Seetings';
import SeetingsChange from './Pages/SeetingsChanges';



function App(props) {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      props.verifyToken(token)

    }
  }, [])


  return (
    <BrowserRouter>
      <Routes>

        <Route path='*' element={<Home />} />{" "}
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutUs' element={<AboutPage />} />
        <Route path='/signUp' element={props.user ? <Navigate replace to='/' /> : <SignUp />} />
        <Route path='/signIn' element={props.user ? <Navigate replace to='/' /> : <SignIn />} />
        <Route path='/panel' element={props.user?.rol !== "user" ? <Navigate replace to='/err' /> : <SignIn />} />
        <Route path='/err' element={<ErrorScreen />} />
        <Route path='/seetings' element={<Seetings />}/>
        <Route path='seetingsChanges' element={<SeetingsChange/>}/>
      </Routes>
      <Snackbar />
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  verifyToken: userAction.verifyToken
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);