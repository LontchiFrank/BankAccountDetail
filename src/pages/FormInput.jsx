import axios from "axios";
import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useId } from "react-id-generator";
function FormInput() {
const [formData, setFormData] = useState({
  name:"",
  email:"",
  tel:"",
  amount:""
})
const [accounts, setAccount] = useState([]);
const {name,email,tel,amount} = formData;
const [htmlId] = useId();
const handleInputChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
}
const createAccount = async(account)=>{
const request={
  id: htmlId,
  ...account
}
console.log(htmlId)
  const response = await axios.post("https://goodwillbackend.herokuapp.com/users/CreateAccount",request);
  console.log(response);
  setAccount([...accounts,response.data]);
    }
console.log(accounts);
const handleSubmit=(e)=>{
  e.preventDefault();
createAccount(formData);
setFormData({
  name:"",
  email:"",
  tel:"",
  amount:""
})

}


  return (
    <div class="container register">
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3 style={{color:"white"}}>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
          <a href="/viewclient"> 
          <input type="submit" name="" value="View Accounts" />
          <br />
          </a>
        
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
              <form class="row register-form" onSubmit={(e)=>handleSubmit(e)} >
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Names *"
                      name="name"
                      value={name}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmptel"
                      class="form-control"
                      placeholder="Your tel *"
                      name="tel"
                      value={tel}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                
                  
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email *"
                      name="email"
                      value={email}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                  <div class="form-group mb-3">
                    <input
                      type="number"
                      minlength="10"
                      maxlength="10"
                      name="txtEmptel"
                      class="form-control"
                      placeholder="Amount Installed *"
                      name="amount"
                      value={amount}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
              
                  <input
                    type="submit"
                    class="btnRegister"
                    value="Create Account"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
