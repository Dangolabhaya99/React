import React, { useState } from 'react'

const ConatactComponent = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "",message:""});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    } 
    if (!formValues.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      // handle form submission
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 my-9 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-500 ">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={formValues.name}
            onChange={handleChange} className="w-full p-2 mt-1 border rounded-md text-red-600" placeholder="Enter your name" />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formValues.email}
            onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your email" />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label className="text-lg font-medium text-gray-700">Message</label>
            <textarea value={formValues.message}
            onChange={handleChange} className="w-full p-2 mt-1 border rounded-md" placeholder="Enter the message"></textarea>
            {errors.message && <p>{errors.message}</p>}
          </div>
          <div className='text-center'>
          <button type="submit" className="p-3 text-white bg-green-500 rounded-md hover:bg-green-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConatactComponent
