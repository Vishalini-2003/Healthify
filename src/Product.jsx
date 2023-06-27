
import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom'
//import image1 from './images/cro0023.jpg';
function Product() {
  const [products] = useState([
    {
      id: 1,
      name: 'Crocin 650',
      date:'jan 2023',
      price: 9.99,
      imgadd: 'https://rb.gy/ltynxr',
    },
    { id: 2, 
      name: 'Zincovit', 
      price: 19.99, 
      date:'nov 2022',
      imgadd: 'https://rb.gy/sbqgjo' },
    { id: 3, 
      name: 'Injection', 
      price: 29.99, 
      date:'aug 2022',
      imgadd: 'https://rb.gy/6twf4r' },
      {
        
        id: 4,
        name: 'Benadryl',
        price: 9.99,
        imgadd:'https://rb.gy/k9q3sz',
      }
  ]);
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleUpdateQuantity(productId, quantity) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    //<body className="App">
    <div className="App">
      <nav className='justify-content-between'>
            <h4>Mansahaai</h4>
            <Link to="/Bloodbank" className="btn btn-light " >
                BloodBank
              </Link>
           
        <Link to="/Login" className="btn btn-light " >
                Login
              </Link>
        </nav>
      <h1>HealthifyMart</h1>
      <h2>Products</h2>
      
        {products.map((product) => (
           <>
            <th >
              <div className="products">
              <div className="Prod">
                <img src={product.imgadd} alt="image" />
                <h3 className='product'>{product.name}</h3>
                <h3>{product.price}</h3>
                <button
                  onClick={() => handleAddToCart(product)}
                  class="button-33"
                >
                  add to cart
                </button>
              </div>
              </div>
            </th>
             </>
        ))}
      
      <h2 className='p-5'>Medical Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Mfg. Date</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.date}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, e.target.value)
                  }
                />
              </td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  class="button-34"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ₹{getTotal()}</h3>
    </div>
    //</body>
  );
}

export default Product;
