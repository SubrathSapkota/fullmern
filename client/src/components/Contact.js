import React, { useState   } from "react";
import { useNavigate } from 'react-router-dom';
import "./style/contact.css";

const Contact = () => {
  const navigate = useNavigate ();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const PostData = async (e)=>{
    e.preventDefault();

    const { name, email, phone, message } = contactData;

    const res = await fetch("http://localhost:4000/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    });

    const msgData = await res.json();

    if(msgData.status === 422 || !msgData){
      window.alert("Invalid Registration");
    }
    else{
      window.alert("Registration Succussful..");

      navigate("/")
      
    }

  }

 

  return (
    <div className="mainContact">
      {/* form section starts here  */}
      <section className="contactFormFull">
        <div className="heroContact">
          <h1 className="heroContactTitle">CONTACT US</h1>
          <p className="heroContactDesc">Get in touch with us..</p>
        </div>
        <div className="contactForm">
          <form action="" method="POST" className="form">
            <input
              className="imputField"
              name="name"
              value={contactData.name}
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              placeholder="First Name"
            />
            <input
              className="imputField"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="imputField"
              name="phone"
              value={contactData.phone}
              onChange={handleInputChange}
              autoComplete="off"
              type="text"
              placeholder="Contact Number"
            />
            <textarea
              className="textarea "
              name="message"
              value={contactData.message}
              onChange={handleInputChange}
              autoComplete="off"
              cols="30"
              rows="6"
              placeholder="Enter your message here..."
            ></textarea>
            <button className="inputButton" type="submit" onClick={PostData}>
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
