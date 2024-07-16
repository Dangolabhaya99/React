import React, { useState } from 'react';

const ProductComponent = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            productName,
            productPrice,
            productQuantity,
            productCategory,
        });
    }

    return (
        <>
            <div className='bg-blue-500 py-2 text-lg text-center'>
                Add Product
            </div>
            <form className='flex justify-center my-4 ' onSubmit={handleSubmit}>
                <div>
                    <h1>{productName}</h1>
                    <h1>{productPrice}</h1>
                    <h1>{productQuantity}</h1>
                    <h1>{productCategory}</h1>

                    <label className='text-lg' htmlFor="name">Product Name:</label><br />
                    <input 
                        onChange={(e) => setProductName(e.target.value)} 
                        className='py-3 border-2 rounded-md border-black' 
                        id="name"
                        type="text"
                        placeholder='Enter the name of Product' 
                    /><br />

                    <label className='text-lg ' htmlFor="price">Product Price:</label><br />
                    <input 
                        onChange={(e) => setProductPrice(e.target.value)} 
                        className='py-3 border-2 rounded-md border-black' 
                        id="price"
                        type="text" 
                        placeholder='Enter the Product Price' 
                    /><br />

                    <label className='text-lg ' htmlFor="quantity">Product Quantity:</label><br />
                    <input 
                        onChange={(e) => setProductQuantity(e.target.value)} 
                        className=' py-3 border-2 rounded-md border-black' 
                        id="quantity"
                        type="text" 
                        placeholder='Enter the Product Quantity' 
                    /><br />

                    <label className='text-lg' htmlFor="category">Product Category:</label><br />
                    <select 
                        onChange={(e) => setProductCategory(e.target.value)} 
                        className='py-3 border-2 rounded-md border-black' 
                        id="category"
                    >
                        <option value="">Select a Category</option>
                        <option value="Books">Books</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Toys">Toys</option>
                    </select><br />
                    <button className="bg-blue-500 text-white text-md p-2 my-2 rounded-r " type="submit">Submit</button>
                </div>
                
            </form>
        </>
    );
}

export default ProductComponent;
