// import React, { useState } from 'react';
// import './GoogleLens.css';

// const Orders = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUploadedImage(reader.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="google-lens-container">
//       <div className="lens-header">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Google_Lens_logo.svg/1200px-Google_Lens_logo.svg.png"
//           alt="Google Lens Logo"
//           className="lens-logo"
//         />
//         <h1 className="lens-title">Google Lens</h1>
//       </div>
//       <div className="lens-main">
//         <div className="image-upload">
//           <input type="file" onChange={handleImageUpload} accept="image/*" />
//           <label htmlFor="fileInput">Upload Image</label>
//         </div>
//         <div className="image-preview-container">
//           {uploadedImage && (
//             <img
//               src={uploadedImage}
//               alt="Uploaded"
//               className="image-preview"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;
