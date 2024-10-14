import React from 'react';

export default function About({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>About Us</h2>
        <p>Welcome to <strong>Envision Cook.Enjoy</strong>! Our mission is simple: to transform your everyday cooking experience by helping you find delicious and creative recipes based on the ingredients you already have at home.</p>
        
        <p>Whether you're a culinary expert or just starting out in the kitchen, Envision Cook Enjoy is designed to inspire your next meal. Our app works by allowing you to input the ingredients you currently have, and in return, it provides you with a variety of recipe ideas that match. No more wasting ingredients or wondering what to make with random items in your fridge—our app makes meal planning effortless and fun.</p>

        <h3>How It Works</h3>
        <p>Using the app is easy and user-friendly:</p>
        <ul>
          <li>Simply enter the ingredients you have on hand into the search bar.</li>
          <li>Our app connects to a powerful recipe database and returns a list of recipes you can make with those ingredients.</li>
          <li>Each recipe is accompanied by detailed instructions, a list of required ingredients, and even nutritional information to help you make informed choices.</li>
          <li>Click on any recipe to view more details, including step-by-step cooking instructions and tips.</li>
        </ul>

        <h3>Benefits of Using Envision Cook Enjoy</h3>
        <p>Our app is more than just a recipe finder. Here are some of the benefits you can expect:</p>
        <ul>
          <li><strong>Reduce Food Waste:</strong> No more throwing out ingredients you forgot about or couldn't use. Envision Cook Enjoy helps you make the most of what you already have.</li>
          <li><strong>Save Time:</strong> With easy access to quick and simple recipes, you'll spend less time planning meals and more time enjoying them.</li>
          <li><strong>Healthy Eating:</strong> Filter recipes to match your dietary preferences or health goals. Whether you're looking for vegan, low-carb, or high-protein options, we've got you covered.</li>
          <li><strong>Discover New Flavors:</strong> Get inspired by new recipes and try cooking something you’ve never made before. Expand your culinary horizons without needing to shop for new ingredients.</li>
          <li><strong>Convenience:</strong> No need to scroll through endless recipe websites—everything is at your fingertips in one simple app.</li>
        </ul>

        <p>We hope <strong>Envision Cook.Enjoy</strong> becomes your go-to kitchen companion, turning everyday ingredients into delicious meals. Happy cooking!</p>
      </div>
    </div>
  );
}

