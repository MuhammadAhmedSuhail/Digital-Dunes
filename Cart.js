import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ShoppingCart(props) {
  
  const [productarr, setProductarr] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [order,setOrder] = useState(false);
  
  const calculateTotal = () => {
    let total = 0;
    props.cart.forEach((object) => {
      total += object.quantity * object.price;
    });
    return total.toFixed(2);
  };


  function onIncrease(index, quan) {
    if (quan < 99) {
      props.setCart((prevObjects) => {
        return prevObjects.map((object, ind) => {
          if (ind === index) {
            return { ...object, quantity: props.cart[index].quantity + 1 };
          }
          return object;
        });
      });
    }
  }

  function onDecrease(index, quan) {
    if (quan >= 2) {
      props.setCart((prevObjects) => {
        return prevObjects.map((object, ind) => {
          if (ind === index) {
            return { ...object, quantity: props.cart[index].quantity - 1 };
          }
          return object;
        });
      });
    }
  }

  function onDelete(index) {
    props.setCart((prevObjects) => {
      return prevObjects.filter((_, ind) => ind !== index);
    });
  }

  const handleCheckout = async () => {

    try {
      // Fetch product IDs
      await fetchProductIds();
    
    } catch (error) {
      console.error('Failed to complete the checkout', error);
    }

  };

  useEffect(() => {
    if (productarr.length === props.cart.length && productarr.length > 0)
    {
      submitOrder();
    }
  }, [productarr]);

  const fetchProductIds = async () => {
    const promises = props.cart.map(async (product) => {
      const obj = {
        productId: null,
        quantity: product.quantity,
      };
  
      try {
        const response = await fetch(`http://localhost:8080/products/${product.name}`);
        const data = await response.json();
        obj.productId = data[0].id;
        setProductarr((prevArr) => [...prevArr, obj]);
      } catch (error) {
        console.error('Failed to fetch product ID', error);
      }
    });
  
    await Promise.all(promises);
    console.log("Function");
    console.log(productarr);
  };

  
  const submitOrder = async () => {
    const orderTotal = calculateTotal();
  
    fetch('http://localhost:8080/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: productarr, total: orderTotal }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        console.error('Failed to submit the order', error);
      });
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'white', padding: '20px 20px', margin: '20px 20px' }}>
        <p style={{ backgroundColor: 'white', textAlign: 'left', fontSize: '30px' }}>Shopping Cart</p>

        {props.cart.map((object, index) => (
          <div key={index} style={{ backgroundColor: 'black' }}>
            <div className="d-flex justify-content-between align-items-center mb-3" style={{ backgroundColor: 'white' }}>
              <div>
                <h5>{object.name}</h5>
                <p>Quantity: {object.quantity}</p>
                <button className="btn btn-secondary me-2" onClick={() => { onIncrease(index, object.quantity) }}>+</button>
                <button className="btn btn-secondary" onClick={() => { onDecrease(index, object.quantity) }}>-</button>
              </div>
              <div>
                <p>${object.price}</p>
                <button className="btn btn-danger" onClick={() => { onDelete(index) }}>Delete</button>
              </div>
            </div>
          </div>
        ))}

        <hr />
        <h4 className="text-end">Total: ${calculateTotal()}</h4>
        <button className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default ShoppingCart;