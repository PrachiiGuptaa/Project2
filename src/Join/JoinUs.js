import React, { useEffect, useState } from "react";
// import profile from "../user.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './JoinUs.css'
import { Link } from "react-router-dom";

function JoinUs() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [errors] = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let userList =
        JSON.parse(localStorage.getItem("registeredUserList")) || [];
      userList.push(formValues);
      localStorage.setItem("registeredUserList", JSON.stringify(userList));
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const codex = /\s/g
    if (codex.test(values.name)){
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return [errors, false];
  };

  return (
    <>
    <div className="demo">home</div>
      <form onSubmit={handleSubmit}>
        <div className='outer'>
        <h3>Join Us</h3>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div style={{ color: "green" }}>Registered successfully</div>
          ) : null}
          <div className='img'>
            {/* <div className='containerImg'>
              <img style={{borderRadius:'60%',height:'auto',width:'30%'}} className='profile' src={profile} alt="profile" />
            </div> */}
          </div>

          <input
            className='user'
            type="text"
            name="name"
            placeholder="Username"
            value={formValues.name}
            onChange={handleChange} required
          />
          <p style={{ color: "red" }}>{formErrors.name}</p>

          <input
            className='email'
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange} required
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>

          <input
            className='pass'
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange} required
          />
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <div className='btn'>
            <button className="SignUpButton">Register</button>
          </div>
        </div>
       <br />
        <span>Already, have a account ? &nbsp;<Link to='/JoinWithUs'>Login</Link></span> 
      </form>
      <ToastContainer />
    </>
  );
}

export default JoinUs;
