import React, { useState } from 'react';

export default function AddProduct({ onSubmit }) {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState('Digital Services');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const userDetails = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('price', productPrice);
    formData.append('image', productImage);
    formData.append('category', category);
    formData.append('by', userDetails);
  
    try {
      const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setSuccessMessage('Product added successfully.');

        // Clear form fields after success
        setProductName('');
        setProductDescription('');
        setProductPrice(0);
        setProductImage(null);

        // Remove success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Failed to add product:', error);
      setErrorMessage('Failed to add product. Please try again.');

      // Remove error message after 5 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };
  


  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(Number(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  return (
    <>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}


    <form className="p-4 border rounded" style={{color:"white",textAlign:"left"}}>
      <h2 className="mb-4">Add Product</h2>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name:</label>
        <input type="text" id="productName" value={productName} onChange={handleProductNameChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">Product Description:</label>
        <textarea id="productDescription" value={productDescription} onChange={handleProductDescriptionChange} className="form-control"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Product Price:</label>
        <input type="number" id="productPrice" value={productPrice} onChange={handleProductPriceChange} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          className="form-control"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required >
          <option value="Digital Services">Digital Services</option>
          <option value="Ebook">Ebook</option>
          <option value="Video Courses">Video Courses</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Web Templates">Web Templates</option>
          <option value="Art Work">Art Work</option>
        </select>
      </div>
      <br/>
      <div className="mb-3">
        <label htmlFor="productImage" className="form-label">Product Image:</label>
        <input type="file" id="productImage" accept="image/*" onChange={handleProductImageChange} className="form-control" />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
    </form>
    </>
  );
}
