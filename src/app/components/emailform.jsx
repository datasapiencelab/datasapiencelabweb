"use client";
import React, { useState } from "react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your email sending logic here
    console.log("Sending email with data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-black shadow-lg rounded-md mx-auto border m-10 w-2/3 shadow-white hover:shadow-secondary"
    > 
    <div className="text-center font-serif sm:text-xl md:text-2xl lg:text-4xl p-5">
        Imagine your software dreams...
    </div>
    <div className="text-center font-serif sm:text-xl md:text-2xl lg:text-4xl p-5">
        Unleashed
    </div>
    <div className="text-center font-serif sm:text-lg md:text-2xl lg:text-3xl p-5">
        Because we will build them into reality.
    </div>
      <div className="mb-4 mt-8">
        <label htmlFor="name" className="font-mono">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none focus:border-secondary focus:shadow-secondary focus:shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none focus:border-secondary focus:shadow-secondary focus:shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="textarea textarea-lg w-full focus:outline-none focus:border-secondary focus:shadow-secondary focus:shadow-sm"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn btn-black w-1/4  hover:border-secondary hover:shadow-secondary hover:shadow-md hover:text-secondary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
