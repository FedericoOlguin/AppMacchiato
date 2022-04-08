import React from 'react'
import '../Styles/seetings.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux'


function Seetings(props) {
  return (
    <div className='containerCardUser'>
      <NavBar />
      {console.log(props)}

      <div className='container-cardppal'>

        <div id='cardUser'>
          <div className="esquema-card">
            <div  className='img-h1'>
              <h1 className='subtitle-user'>Profile</h1>
              <div className='fotoUser-Card'>
                <img
                src={props.user?.photoURL}
                className='fotoUsuario'
                />
              </div>
            </div>
            <h2 className='infoUser'>{props.user?.name.firstName}</h2>
            <h2 className='infoUser'>Apellido</h2>
            <h2 className='infoUser'>País</h2>
            <h2 className='infoUser'>{props.user?.email}</h2>

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



const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, null)(Seetings)

