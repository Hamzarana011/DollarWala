import React from 'react'


const Login = () => {
  return (
  
      <div className="vh-100 " style={{backgroundColor: "coral"}}  >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderRadius:"1rem"}} >
            <div className="card-body p-5 text-center">
  
              <h3 className="mb-5">Sign in</h3>
  
              <div className="form-outline mb-4">
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
              </div>

              <div className="form-outline mb-4">
              <input type="password" id="inputpassword" class="form-control" placeholder="Password" required autofocus/>
              </div>
  
              

              <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label px-2" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-outline-dark" type="submit">Login</button>
  
            
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  
 
  )
}

export default Login
