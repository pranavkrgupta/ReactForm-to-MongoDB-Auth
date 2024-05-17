// const ThankyouMessage = ()=> {

//     return(
//         <>
//             <h1>Thank You for your feedback!</h1>
//             <p>Your Review has been submitted successfully.</p>
//             <button>Continue Exploring</button>
//         </>
//     )
// }
// export default ThankyouMessage;

// import React from 'react';
import './popup.css'
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
