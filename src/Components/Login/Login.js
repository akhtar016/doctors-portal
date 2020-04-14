import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit,  errors } = useForm();
  const onSubmit = (data) => {
   // console.log(data);
  }; // your form submit function which will invoke after successful validation
  //console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center  align-items-center">
        <div>
      <div className="book-appointment shadow-sm p-3 mb-5 bg-white rounded">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form-clear"
          className="py-5"
        >
          <h2
            className="text-center text-info mb-4"  
          >
            Login
          </h2>
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              ref={register({ required: false })}
              placeholder="Email"
            />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-group">
            <input
              name="password"
              className="form-control"
              ref={register({ required: false })}
              placeholder="Password"
            />
            {errors.password && <span className="error">Password is required</span>}
          </div>
          <p style={{color:'red', fontSize:'14px'}}>Forget Password?</p>
          <div className="form-group">
             <Link to="/dashboard"><button className="btn btn-info btn-block" type="submit">
              Send
            </button></Link>

          </div>
        </form>

      
      </div>
    </div>
           
        </div>
        <div className="col-md-6 customCss">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1586175728/Group_140_tb5ly4.png"
            className=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;