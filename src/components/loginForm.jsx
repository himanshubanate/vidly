import React from "react";
import { useState } from "react";

export default function LoginForm() {
  const [account, setAccount] = useState({ userName: "", password: "" });
  const [errors, setErrors] = useState({});

//   const validateProperty=({id,value})=>{

//     if(id==="username"){
//         if(value.trim()===""){
//             return"username is required";
//         }
//     }
//     if(id==="password"){
//         if(value.trim()===""){
//             return"password is required";
//         }
//     };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAccount((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(account);
  };
  const validate = (values) => {
    // return {
    //   userName: "username is required",
    // };

    const formErrors = {};
    if (values.userName.trim() === "") {
      formErrors.username = "usename required";
    }
    if (values.password.trim() === "") {
      formErrors.password = "password required";
    }
    // return Object.keys(formErrors).length === 0 ? null : formErrors;
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(account));
    if (errors) return;
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="container w-50 m-auto" onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="username">Username</label>
          <input
            autofocus
            onChange={handleChange}
            id="username"
            type="text"
            className="form-control mt-2"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            type="text"
            className="form-control mt-2"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        <button className="btn btn-warning btn-sm m-2">Login</button>
      </form>
    </div>
  );
}
