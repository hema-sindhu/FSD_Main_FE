import React, { useState } from 'react';
import Register from './Register'; // Import the Register component

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // State to show register page

  const products = [
    { name: 'Rice', price: 80, image: 'https://www.health.com/thmb/a8GxwWgmB5KpQW8SfW6VA7UFwaI=/722x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg' },
    { name: 'Wheat Flour', price: 50, image: 'https://i0.wp.com/dhatuorganics.com/wp-content/uploads/2023/12/Stock-2-10.jpg' },
    { name: 'Sugar', price: 40, image: 'https://img.freepik.com/free-photo/world-diabetes-day-sugar-wooden-bowl-dark-surface_1150-26666.jpg' },
    { name: 'Cooking Oil', price: 150, image: 'https://media.istockphoto.com/id/1206682746/photo/pouring-extra-virgin-olive-oil-in-a-glass-bowl.jpg?s=612x612&w=0&k=20&c=0b9ppVJN0BNyzpLodnhPV8MzNTGY7-9-kteOUIBPxq8=' },
    { name: 'Salt', price: 20, image: 'https://media.istockphoto.com/id/1051727580/photo/crystals-of-shallow-salt-in-a-scoop-spoon-on-a-dark-gray-table-background-for-advertising.jpg?s=612x612&w=0&k=20&c=gY7sQzv5Yxan44LS8vkDZe9Px4Su9uz_kY0oItEovEQ=' },
    { name: 'Spices', price: 200, image: 'https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notification disappears after 3 seconds
  };

  // Function to toggle between Main Page and Register Page
  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleShowMain = () => {
    setShowRegister(false);
  };

  return (
    <>
      {!showRegister ? (
        <>
          {/* Navbar */}
          <div className="menu">
            <nav>
              <h2 className="logo">Grocery Mart</h2>
              <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#cart">Cart</a></li>
                <li><a href="#register" onClick={handleShowRegister}>Register</a></li>
              </ul>
            </nav>
          </div>

          {/* Cart Notification */}
          {showNotification && (
            <div className="cart-notification">
              <h4>Cart Items</h4>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Page */}
          <div className="container">
            <div className="content">
              <h1>Welcome to Grocery Mart!</h1>
              <h2>Your One-Stop Grocery Shop</h2>
              <p>We provide fresh and quality grocery items delivered straight to your doorstep. Enjoy great prices and quick delivery on all your essentials!</p>
              <button className="btn-order">Shop Now</button>
            </div>
            <div className="image">
              <img src="https://img.freepik.com/free-photo/grocery-items-in-basket_144627-6706.jpg" alt="Grocery Items" />
            </div>
          </div>

          {/* How It Works Section */}
          <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="info-boxes">
              <div className="info-box">
                <h3>Browse Products</h3>
                <p>Explore a wide range of grocery items at your convenience.</p>
              </div>
              <div className="info-box highlighted">
                <h3>Quality Assurance</h3>
                <p>We ensure that all our products meet the highest quality standards.</p>
              </div>
              <div className="info-box">
                <h3>Fast Delivery</h3>
                <p>Your groceries will be delivered right to your doorstep in no time.</p>
              </div>
            </div>
          </section>

          {/* About Grocery Mart Section */}
          <section className="about-grocery" id='about'>
            <div className="image-container">
              <img src="https://img.freepik.com/free-photo/grocery-store-shelves_144627-6705.jpg" alt="Grocery Store" />
            </div>
            <div className="grocery-info">
              <h2>About Grocery Mart</h2>
              <h3>Over 500+ Products</h3>
              <p>We offer a wide variety of products to cater to all your grocery needs.</p>
              <button className="explore-products-btn">Explore Products</button>
            </div>
          </section>

          {/* Products */}
          <div className="app" id='products'>
            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <button className="order-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className='footer'>
            <p>&copy; 2024 Grocery Mart. All Rights Reserved.</p>
          </div>
        </>
      ) : (
        // Register Page
        <Register goBack={handleShowMain} />
      )}
    </>
  );
};

export default App;
