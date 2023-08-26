import React, { useState } from "react";
import "./style/signup.css";
import {
  BsFillPersonFill,
  BsTelephone,
  BsPersonWorkspace,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import SIGNUPIMG from "../images/signup.png";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpasseord: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  console.log(user);

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
                  <label htmlFor="name">
                    <BsFillPersonFill />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onchange={changeHandler}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <AiOutlineMail />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onchange={changeHandler}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <BsTelephone />
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onchange={changeHandler}
                    placeholder="Mobile Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="profession">
                    <BsPersonWorkspace />
                  </label>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    autoComplete="off"
                    value={user.profession}
                    onchange={changeHandler}
                    placeholder="Profession"
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
                    value={user.password}
                    onchange={changeHandler}
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <RiLockPasswordLine />
                  </label>
                  <input
                    type="cpassword"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpasseord}
                    onchange={changeHandler}
                    placeholder="Confirm Password"
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

export default Signup;
