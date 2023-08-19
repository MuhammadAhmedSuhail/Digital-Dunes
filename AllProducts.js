import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function AllProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/all')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Failed to fetch products', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    fetch(`http://localhost:8080/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Failed to fetch products', error);
      });
  };

  const allProd = () => {
    fetch('http://localhost:8080/all')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Failed to fetch products', error);
      });
  }

  const addToCart = (product) => {
    const newCartItem = {
      name: product.name,
      price: product.price,
      quantity:1
    };

    // Check if the item already exists in the cart
    const isItemInCart = props.cart.some(item => item.name === product.name);

    if (!isItemInCart) {
      props.setCart(prevCart => [...prevCart, newCartItem]);
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" onClick={() => allProd()} className="btn">
          All
        </button>
        <button type="button" onClick={() => handleCategoryClick("Digital Services")} className="btn">
          Digital Services
        </button>
        <button type="button" onClick={() => handleCategoryClick("Ebook")} className="btn">
          Ebooks
        </button>
        <button type="button" onClick={() => handleCategoryClick("Video Courses")} className="btn">
          Video Courses
        </button>
        <button type="button" onClick={() => handleCategoryClick("Graphic Design")} className="btn">
          Graphic Design
        </button>
        <button type="button" onClick={() => handleCategoryClick("Web Templates")} className="btn">
          Web Templates
        </button>
        <button type="button" onClick={() => handleCategoryClick("Art Work")} className="btn">
          Artwork
        </button>
      </div>
      <br />
      
    <div className="row" style={{maxWidth:"100%",maxHeight:"100%"}}>

        {products.map((product,index) => (
          <div className="col-md-3 mb-3" key={index} style={{height:"30%"}}>

            <div className="card">
              <a>
                <img src={`http://localhost:8080/uploads/${product.image}`} alt={product.name} className="responsive-image" />
              </a>
              <div className="card-body" style={{height:"200px"}}>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button type="button" className="btn" style={{backgroundColor:"#1D4355",marginRight:"5px"}} disabled={props.cart.some(item => item.name === product.name)} onClick={() => addToCart(product)}>Buy</button>
                <span>${product.price}</span>
              </div>
            </div>
        </div>
        ))}
      </div>

    </>
  );
}

export default AllProducts;