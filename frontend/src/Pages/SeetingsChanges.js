import React from 'react'
import '../Styles/seetingschange.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Countries from '../components/apiCountry';
import BuildIcon from '@mui/icons-material/Build';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link as LinkRouter} from 'react-router-dom'

function SeetingsChange(){
  return(
    <div className='container-seetings'>
      <NavBar />
      

      <div className='container-ppalSeetings'>


        <div id='form-signup-seetings'>
          <main className="mainForm-seetings2">
            <LinkRouter className="scrollback" to={"/seetings"}><ArrowBackIosNewIcon className='iconoBack' />
            </LinkRouter>
            <h2 className='subtitle-signup-seetings'>Seetings your profile</h2>
            <div className="formContainer-seetings">
              <form action="" className="form-seetings" /* onSubmit={""} ref={""} */ id="form">

                <fieldset className="fieldsetFrom-seetings">

                  <label className="labelForm-seetings" htmlFor="name">
                    <div className='seeting-config'>
                      <span className='span-signup-seetings'>First Name </span>
                      <BuildIcon className='butonSeetings' />
                    </div>
                    <input className="inputFrom-seetings" type="text" id="name" name="name" required />
                  </label>

                  <label className="labelForm-seetings" htmlFor="lastName">
                    <div className='seeting-config'>
                      <span className='span-signup-seetings'>Last Name</span>
                      <BuildIcon className='butonSeetings' />
                    </div>
                    <input className="inputFrom-seetings" type="text" id="lastName" name="lastName" />
                  </label>

                  <label className="labelForm-seetings" htmlFor="imageUrl">
                    <div className='seeting-config'>
                      <span className='span-signup-seetings'>Image URL</span>
                      <BuildIcon className='butonSeetings' />
                    </div>
                    <input className="inputFrom-seetings" type="text" id="imageUrl" name="imageUrl" />
                  </label>

                  <label className="labelForm-seetings" htmlFor="pais">
                    <div className='seeting-config'>
                      <span className='span-signup-seetings'>Country</span>
                      <BuildIcon className='butonSeetings' />
                    </div>
                    <select className="inputFrom-seetings" defaultValue={"default"} name="pais" id="pais">

                      <option value="default">Select your Country</option>
                      {Countries.map(country => {

                        return (<option key={country.code} value={country.name}>{country.name}</option>)
                      })}

                    </select>
                  </label>



                  <button className="button-seetings" type="submit">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Done</span>
                  </button>
                </fieldset>
              </form>
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SeetingsChange