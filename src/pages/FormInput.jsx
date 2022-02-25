import React from "react";
import { Form, Button } from "react-bootstrap";
function FormInput() {
  return (
    <div class="container register">
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
          <input type="submit" name="" value="View Accounts" />
          <br />
        </div>
        <div class="col-md-9 register-right">
         
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Input Clients Information into the Platform </h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Names *"
                      value=""
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      class="form-control"
                      placeholder="Your Phone *"
                      value=""
                    />
                  </div>
                
                  
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email *"
                      value=""
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      type="number"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      class="form-control"
                      placeholder="Amount Installed *"
                      value=""
                    />
                  </div>
              
                  <input
                    type="submit"
                    class="btnRegister"
                    value="Create Account"
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h3 class="register-heading">Apply as a Hirer</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name *"
                      value=""
                    />
                  </div>
                 
                  <div class="form-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email *"
                      value=""
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      type="number"
                      maxlength="10"
                      minlength="10"
                      class="form-control"
                      placeholder="Phone *"
                      value=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                 
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="`Answer *"
                      value=""
                    />
                  </div>
                  <input
                    type="submit"
                    class="btnRegister"
                    value="Create Account"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
