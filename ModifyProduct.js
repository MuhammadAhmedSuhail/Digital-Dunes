import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifyProduct({ onProductSelect }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [index,setIndex] = useState(null);

  useEffect(() => {
    // localStorage.getItem('user')
    const username = "Muhammad Ahmed Suhail";
    const extractedUsername = username.replace(/"/g, '');

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/username/${"Muhammad Ahmed Suhail"}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  const getProductIds = async (name) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${name}`);
      return response.data
    } catch (error) {
      console.error('Failed to get product IDs', error);
    }
  };

  const handleProductClick = (product,ind) => {
    setIndex(ind)
    setSelectedProduct(product);
  };

  const handleProductSave = async (event) => {
    event.preventDefault();
  try {
    const changed = new Object();
    const obj = await getProductIds(products[index].name)
    const id = obj[0].id
    if (selectedProduct.name !== products[index].name)
    {
      // formData.append('name', selectedProduct.name);
      changed["name"] = selectedProduct.name
    }
    if (selectedProduct.description !== products[index].description)
    {
      // formData.append('description', selectedProduct.description);
      changed["description"] = selectedProduct.description
    }
    if (selectedProduct.price !== products[index].price)
    {
      // formData.append('price', selectedProduct.price);
      changed["price"] = selectedProduct.price
    }
    if(selectedProduct.image !== "")
    {
      const formData = new FormData();
      formData.append('image', selectedProduct.image);

      axios.post(`http://localhost:8080/upload/${id}`, formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        setSelectedProduct({ ...selectedProduct, image: imageUrl });
      })
      .catch((error) => {
        console.error('Failed to upload image', error);
      });

      setSelectedProduct({ ...selectedProduct, image: null })
    }
      console.log(changed)
      
      const response = await axios.put(`http://localhost:8080/products/${id}`, changed).then((data) =>{
          const updatedProduct = data;
          console.log('Product updated:', updatedProduct);
          setSelectedProduct(null);
      })
  } catch (error) {
    console.error('Failed to update product', error);
  }
  setSelectedProduct(null);
  };

  const deleteProduct = async (name) => {
    const obj = await getProductIds(name)
    const id = obj[0].id
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      console.log('Product deleted successfully');
    } catch (error) {
      console.error(`Failed to delete product ${id}`, error);
    }
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedProduct({ ...selectedProduct, image: file });
  };

  return (
    <div className="card h-auto" style={{ textAlign: 'left' }}>
      <div className="card-header">
        <h5 className="card-title mb-0">Product List</h5>
      </div>
      <ul className="list-group list-group-flush">
        {products.map((product,ind) => (
          <>
          <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => handleProductClick(product,ind)}
            style={{ cursor: 'pointer' }}>
            {product.name}
            <div key={ind}>
            <span className="badge bg-primary rounded-pill">{product.price}</span>
            <button type="button" onClick={() => { deleteProduct(product.name) }} style={{backgroundColor:"red"}} className="btn">
            Delete
            </button>
            </div>
          </li>
          </>
        ))}
      </ul>
      {selectedProduct && (
        <div className="card-body">
          <form onSubmit={handleProductSave}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <b>Product Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={selectedProduct.name}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                <b>Description</b>
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                defaultValue={selectedProduct.description}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                <b>Price</b>
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                defaultValue={selectedProduct.price}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <b>Image URL</b>
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                id="image"
                onChange={handleImageUpload}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}