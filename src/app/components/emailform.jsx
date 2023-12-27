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
      className="p-8 bg-gray-800 shadow-md rounded-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full focus:outline-none focus:shadow-outline"
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
          className="input input-bordered w-full focus:outline-none focus:shadow-outline"
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
          className="textarea textarea-lg w-full focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn btn-base-100 w-1/4 mt-4 hover:btn-accent hover:shadow-accent hover:shadow-md hover:border-black"
        >
          Send Email
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
