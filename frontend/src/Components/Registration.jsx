import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const BACKEND_URL = import.meta.env.MODE === 'production' 
    ? import.meta.env.VITE_BACKEND_CLOUD_URL 
    : import.meta.env.VITE_BACKEND_LOCAL_URL;

    const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Select',
    emailID: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`$https://message-with-profilepic.onrender.com/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }); console.log('User Data:', user);

      const result = await response.json();
      if (response.ok) {
        alert('Registration Successful!');
        navigate('/login')
      } else {
        alert('Error occurred while registering the user.');
      }
    } catch (Error) {
      alert('An error occurred, please try again.');
    }
  };

  const navigateLogin = () => {
    navigate('/login')
  };

  return (
    <div className="min-h-screen flex">
      {/* Left section with logo */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <img src="/X_logo.jpg" alt="Logo" className="w-xl h-auto " />
      </div>

      {/* Right section with registration form */}
      <div className="w-1/2 bg-black p-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-black rounded-5xl shadow p-8">
          <h1 className="text-5xl font-bold text-center text-white mb-6">Happening Now</h1>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <label htmlFor="firstName" className="block text-white">
              First Name:
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-4xl"
              />
            </label>

            <label htmlFor="lastName" className="block text-white">
              Last Name:
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user.lastName}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-4xl"
              />
            </label>

            <label htmlFor="dateOfBirth" className="block text-white">
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={user.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-4xl"
              />
            </label>

            <label htmlFor="gender" className="block text-white">
              Gender:
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Select" className='text-gray-400' disabled>Select your gender</option>
                <option value="Male" className="text-black">Male</option>
                <option value="Female" className="text-black">Female</option>
                <option value="Others" className="text-black">Others</option>
              </select>
            </label>

            <label htmlFor="emailID" className="block text-white">
              Email ID:
              <input
                type="email"
                name="emailID"
                id="emailID"
                value={user.emailID}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            <label htmlFor="phoneNumber" className="block text-white">
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            <label htmlFor="password" className="block text-white">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-full mt-1 py-2 px-5 border rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-5 rounded-4xl hover:bg-blue-600 transition-colors mt-4"
            >
              Submit
            </button>
            <p onClick={navigateLogin} className="text-white">Already Have Account? <span className="text-blue-700 underline cursor-pointer ">Login here</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
