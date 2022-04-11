import React, { useState, useEffect } from 'react'
import '../Styles/seetings.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux'
import usersActions from '../redux/actions/userAction';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Seetings(props) {
  const [data, setData] = useState()

  useEffect(() => {
    props.getInfoUser(props.user?.id)
      .then(response => setData(response))
  }, [])


  return (
    <div className='containerCardUser'>
      <NavBar />
     

      <div className='container-cardppal'>
        <LinkRouter className="scrollback-seetings" to={"/"}><ArrowBackIosNewIcon className='iconoBack-seetings' />
        </LinkRouter>

        <div id='cardUser'>
          <div className="esquema-card">
            <div className='img-h1'>
              <h1 className='subtitle-user'>Profile</h1>
              <div className='fotoUser-Card'>
                <img
                  alt='PhotoUser'
                  src={props.user?.photoURL}
                  className='fotoUsuario'
                />
              </div>
            </div>

            <div className='datosuser'>
            <h2 className='infoUser'>Name: {props.user?.name.firstName}</h2>
              <h2 className='infoUser'>Last name: {props.user?.name.lastName}</h2>
            <h2 className='infoUser'>País: {data?.country}</h2>
            <h2 className='infoUser'>Email: {props.user?.email}</h2>
            </div>

            <div className="div-user">
              <LinkRouter className='link-user' aria-current="page" to={"/seetingsChanges"}>
                <button className="button-user" type="submit">

                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Edit your profile</span>
                </button>
              </LinkRouter>
            </div>


          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = {
  getInfoUser: usersActions.getInfoUser
}


const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seetings)

