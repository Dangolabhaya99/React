import React from 'react'

const SignUpCompoenet = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md my-5 p-8 space-y-6 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-500">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className=" text-lg font-medium text-gray-700">Name</label>
            <input type="text" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your name" />
          </div>
          <div>
            <label className=" text-lg font-medium text-gray-700">Phone</label>
            <input type="text" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your Phone number" />
          </div>
          <div>
            <label className=" text-lg font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your email" />
          </div>
          <div>
            <label className=" text-lg font-medium text-black-700">Password</label>
            <input type="password" className="w-full p-2 mt-1 border rounded-md" placeholder="Create password" />
          </div>
          <div className='text-center'>
          <button type="submit" className="p-3 text-white  bg-green-700 rounded-md hover:bg-green-600">Register</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default SignUpCompoenet
