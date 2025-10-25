// src/Contact.jsx
import React, { useState } from "react";

export const  Contact = () =>  {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // handleChange function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // dynamically update field
    });
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload na ho
    console.log("Form data:", formData);
    alert("✅ Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center w-full">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow border-10">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 fw-bold text-primary">Contact Us</h2>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your full name"
                    
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                   
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Enter subject"
                    
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    placeholder="Type your message..."
                    
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


