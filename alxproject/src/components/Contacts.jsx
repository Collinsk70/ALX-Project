import React from 'react';

export default function Contacts({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, feel free to get in touch with us!</p>
        <p><strong>Email 1:</strong> Ckarweru69@gmail.com</p>
        <p><strong>Phone 1:</strong> +254 769 715 692</p>
        <p><strong>Email 2:</strong> CheboiWendy98@gmail.com</p>
        <p><strong>Phone 2:</strong> +254 113 674 550</p>
        <p><strong>Address:</strong> Nairobi, Kenya</p>
        <p>We are always here to help you with any concerns and make your cooking experience more enjoyable!</p>
      </div>
    </div>
  );
}
