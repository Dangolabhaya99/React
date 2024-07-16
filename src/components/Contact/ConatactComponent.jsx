import React from 'react'

const ConatactComponent = () => {
  
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 my-9 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-500 ">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your name" />
          </div>
          <div>
            <label className=" text-lg font-medium text-gray-700">Phone</label>
            <input type="text" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your Phone number" />
          </div>
          <div>
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-2 mt-1 border rounded-md" placeholder="Enter your email" />
          </div>
          <div>
            <label className="text-lg font-medium text-gray-700">Message</label>
            <textarea className="w-full p-2 mt-1 border rounded-md" placeholder="Enter the message"></textarea>
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
