// import React from 'react'

// const AddProducts = () => {



//     return (
//         <div>
//             <h2>Product Information</h2>
//             <form action="">
//                 <div className="">
//                     <p>Product Image</p>
//                     <input type="file" />
//                 </div>
//                 <div className="">
//                     <p>Name of the product</p>
//                     <input type="text" placeholder='Product Name' />
//                 </div>
//                 <div className="">
//                     <p>Product Category</p>
//                     <select>
//                         <option value=""></option>
//                         <option value=""></option>
//                         <option value=""></option>
//                         <option value=""></option>
//                         <option value=""></option>
//                         <option value=""></option>
//                     </select>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default AddProducts


import React, { useState } from "react";

const AddProducts = () => {
  const [images, setImages] = useState([]);

  // Function to handle image upload
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const filePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...filePreviews]);
  };

  // Function to remove a selected image
  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto">
      <h2 className="text-xl font-bold mb-4">Product Information</h2>

      <form>
        {/* Image Upload Section */}
        <div className="mb-6">
          <label className="block font-semibold mb-1">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full h-[40px] text-sm text-gray-500 border border-gray-300 rounded cursor-pointer"
          />
          <div className="flex flex-wrap mt-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="mb-6">
          <label className="block font-semibold mb-1">Name of the Product</label>
          <input
            type="text"
            placeholder="Product name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Category</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            <option>Select category</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Product Description</label>
          <textarea
            rows="4"
            placeholder="Describe the product"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Sale Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <h2 className="text-lg font-semibold mb-4">Product Specifications (where applicable)</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-semibold mb-1">Size (L x W x H) cm</label>
            <input
              type="text"
              placeholder="Enter size"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Warranty Duration</label>
            <input
              type="text"
              placeholder="Enter duration"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-semibold mb-1">What's in the box</label>
            <input
              type="text"
              placeholder="List contents"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
