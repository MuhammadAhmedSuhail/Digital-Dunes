import React, { useState, useEffect } from 'react';

function EditProduct({ productId, onSave }) {
  const [product, setProduct] = useState({
    id: productId,
    name: '',
    price: 0,
    description: '',
  });

  useEffect(() => {
    // fetch product details from server using productId
    // set the product state with the fetched details
    const fetchedProduct = {
      id: productId,
      name: 'Dummy Product',
      price: 10.99,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed laoreet enim. Sed tincidunt, mauris ut sagittis vestibulum, odio purus dignissim lectus, a facilisis lectus justo a nunc. Suspendisse tincidunt purus sit amet sem ultrices congue. Pellentesque eu mi eget felis pulvinar eleifend sit amet vel orci. Ut fringilla augue lectus, eget laoreet odio aliquam sed.',
    };
    setProduct(fetchedProduct);
  }, [productId]);

  const handleNameChange = (event) => {
    setProduct({ ...product, name: event.target.value });
  };

  const handlePriceChange = (event) => {
    setProduct({ ...product, price: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setProduct({ ...product, description: event.target.value });
  };

  const handleSave = () => {
    onSave(product);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Edit Product</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Enter product name"
              value={product.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Enter product price"
              value={product.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
              placeholder="Enter product description"
              value={product.description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;