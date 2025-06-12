// // export default function Contact() {
// //   return (
// //     <div className="page">
// //       <h1>Contact Us</h1>
// //       <p>We’d love to hear from you! Please reach out through the details below:</p>
// //       <p>
// //         📞 Phone: +91-9133843652 <br />
// //         📧 Email: karunakarsarabu9@gmail.com <br />
// //         📍 Address: Bhongir, Telangana, India
// //       </p>
// //     </div>
// //   );
// // }
// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${formData.name}! We’ll get back to you soon.`);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="page">
//       <h1>Contact Us</h1>
//       <p>Please fill out the form below and we’ll get in touch with you shortly.</p>

//       <form onSubmit={handleSubmit} className="contact-form">
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label>Message:</label>
//         <textarea
//           name="message"
//           rows="4"
//           required
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
