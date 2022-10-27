import React, { Component } from 'react'


 class Register extends Component {
  render() {
    return (
      <div>


<section className="vh-100"   >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ borderRadius: `1rem`}} >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Name</label>
            </div>
            
           

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

       
           

            <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>

            <hr className="my-4"/>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
</div>


    
    )
  }
}

export default Register