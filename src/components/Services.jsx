// export default function Services() {
//   return (
//     <div className="page">
//       <h1>Our Services</h1>
//       <ul>
//         <li>💻 Website Development (Static & Dynamic)</li>
//         <li>📱 Mobile App Development</li>
//         <li>🛒 E-Commerce Solutions</li>
//         <li>🔐 Custom Software for Businesses</li>
//         <li>📢 Digital Marketing and SEO</li>
//         <li>🎓 IT Training & Tech Workshops</li>
//       </ul>
//     </div>
//   );
// }
// import './services.css';

// export default function Services() {
//   return (
//     <div className="services-container">
//       <h1>Our Services</h1>
//       <div className="service-cards">
//         <div className="card">
//           <h3>Website Development</h3>
//           <p>We build fast, responsive, and modern websites tailored to your business needs.</p>
//         </div>
//         <div className="card">
//           <h3>Mobile Apps</h3>
//           <p>Custom Android/iOS apps to expand your digital reach and boost customer engagement.</p>
//         </div>
//         <div className="card">
//           <h3>Digital Marketing</h3>
//           <p>From SEO to social media, we help you grow your online presence and reach your audience.</p>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Services() {
  return (
    <div className="page-wrapper">
      <div className="services-container">
        <h1>Our Services</h1>
          <ul className="service-list">
            <li>
            <h3>🎓 Student Training & Workshops</h3>
            <p>We offer hands-on training programs for students and professionals in cutting-edge technologies like the <strong>MERN stack</strong>, <strong>React Native/Expo</strong>, and <strong>AI & Machine Learning</strong>. Our goal is to bridge the gap between academics and industry by providing real-world project experience.</p>
            </li>
          <li>
            <h3>🌐 Web Application Development</h3>
            <p>We build fast, secure, and scalable web apps using modern technologies like React, Node.js, and MongoDB.</p>
          </li>
          <li>
            <h3>📱 Mobile App Development</h3>
            <p>Cross-platform mobile apps that provide seamless performance on Android and iOS — built using React Native and Expo.</p>
          </li>
          <li>
            <h3>🤖 AI Product Development</h3>
            <p>We develop intelligent systems using machine learning, natural language processing, and AI agents to power next-gen user experiences.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
