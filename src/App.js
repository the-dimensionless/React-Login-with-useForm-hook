import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

import { useForm } from 'react-hook-form';

function App() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  const styleFieldValid = "form-control is-valid";
  const styleFieldInvalid = "form-control is-invalid"

  return (
    <div className="App"><br></br>
      <hr>
      </hr>
      <label className="text-success">Simple Form</label>
      <hr />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group row">
            <label htmlFor="inputEmail" className={errors.email ? "col-sm-2 col-form-label text-danger" : "col-sm-2 col-form-label text-success"} >Email</label>
            <div className="col-sm-7">
              <input type="email" className={errors.email ? styleFieldInvalid : styleFieldValid} id="inputEmail" name="email" placeholder="Email"
                ref={register({
                  required: "Email Id cannot be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email Id"
                  }
                })} />
            </div>
            <div className="col-sm-3">
              <small id="passwordHelp" className="text-danger">
                {errors.email && <b>{errors.email.message}</b>}
              </small>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputPassword" className={errors.password ? "col-sm-2 col-form-label text-danger" : "col-sm-2 col-form-label text-success"}>Password</label>
            <div className="col-sm-7">
              <input type="password" className={errors.password ? styleFieldInvalid : styleFieldValid} id="inputPassword" name="password" placeholder="Password"
                ref={register({
                  required: "Password cannot be empty",
                  minLength: {
                    value: 8,
                    message: "Must be 8-20 characters long!",
                  },
                })}
              />
            </div>
            <div className="col-sm-3">
              <small id="passwordHelp" className="text-danger">
                {errors.password && <b>{errors.password.message}</b>}
              </small>
            </div>
          </div>
          <div className="container">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
