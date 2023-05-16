import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className="vh-100 " style={{backgroundColor:"coral"}}  >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderRadius:"1rem"}} >
            <div className="card-body p-5 text-center">
  
              <h3 className="mb-5">Sign up</h3>
  
              <div className="form-outline mb-4">
              <input type="FN" id="FName" class="form-control" placeholder="First Name" required autofocus/>
              </div>

              <div className="form-outline mb-4">
              <input type="LN" id="LName" class="form-control" placeholder="Last Name" required autofocus/>
              </div>

              <div className="form-outline mb-4">
              <input type="User" id="inputUserName" class="form-control" placeholder="User Name" required autofocus/>
              </div>

              <div className="form-outline mb-4">
              <input type="password" id="inputpass" class="form-control" placeholder="Password" required autofocus/>
              </div>

              <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label px-2" for="form1Example3"> Subscribe to our News Letter </label>
            </div>

            {/* <button class="btn btn-primary btn-lg btn-block" type="submit">Register</button> */}

            <div className="buttons">
        <NavLink to="/login" className="btn btn-outline-dark btn-lg ">
          Register
        </NavLink>

  
        </div>    
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  
 
  )
}

export default Register
