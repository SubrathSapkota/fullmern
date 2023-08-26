import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import SIGNUPIMG from "../images/signup.png";

const Login = () => {
  return (
    <>
      <section className="singup">
        <div className="container">
          <div className="singup-content">
            <div className="singup-form">
              {/* <h2 className="form-title">Sign Up</h2> */}
              <div className="form-title">
                <img className="form-title-img" src={SIGNUPIMG} alt="" />
              </div>
              <form action="" className="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <AiOutlineMail />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <RiLockPasswordLine />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
