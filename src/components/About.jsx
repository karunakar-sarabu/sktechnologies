// export default function About() {
//   return (
//     <div className="page">
//       <h1>About Us</h1>
//       <p>
//         Founded with a vision to simplify technology, SK Technologies is a software solutions provider
//         based in Telangana, India. We are passionate about creating meaningful digital experiences.
//       </p>
//       <p>
//         With a focus on quality, simplicity, and innovation, our mission is to empower businesses and individuals
//         with scalable software solutions.
//       </p>
//     </div>
//   );
// }
// import './About.css';

// export default function About() {
//   return (
//     <div className="about-container">
//       <h1>About SK Technologies</h1>
//       <p>
//         SK Technologies is a forward-thinking software startup, dedicated to empowering small businesses and organizations with cutting-edge digital solutions. 
//         From sleek websites to powerful applications, our goal is to deliver innovation, quality, and support to help you thrive in the digital age.
//       </p>
//       <p>
//         Founded in Telangana, we are committed to supporting local businesses while aiming for global impact.
//       </p>
//     </div>
//   );
// }

// import './About.css';

// export default function About() {
//   return (
//     <div className="page-wrapper">
//       <div className="about-container">
//         <h1>About SK Technologies</h1>
//         <p>
//           SK Technologies is a forward-thinking software company dedicated to crafting digital solutions that drive innovation and growth. We specialize in the development of cutting-edge <strong>web applications</strong>, user-friendly <strong>mobile apps</strong>, and intelligent <strong>AI-powered products</strong> tailored to modern needs.
//         </p>
//         <p>
//           Based in India and driven by a passion for technology and service, we empower businesses and individuals by transforming ideas into scalable, secure, and smart digital experiences.
//         </p>
//       </div>
//     </div>
//   );
// }
import './About.css';

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="about-container">
        <h1>About SK Technologies</h1>
        <p>
          SK Technologies is a forward-thinking software company dedicated to crafting digital solutions that drive innovation and growth. We specialize in the development of cutting-edge <strong>web applications</strong>, user-friendly <strong>mobile apps</strong>, and intelligent <strong>AI-powered products</strong>.
        </p>
        <p>
          We also provide skill-building programs through our student training initiatives in modern technologies such as the <strong>MERN stack</strong>, <strong>React Native</strong>, <strong>Expo</strong>, and <strong>AI development</strong>. Our mission is to empower future developers with practical experience and career-ready skills.
        </p>

        <p>
          Based in India and driven by a passion for technology and service, we empower businesses and individuals by transforming ideas into scalable, secure, and smart digital experiences.
        </p>

        <h2>Why Choose Us?</h2>
        <ul className="why-choose-us">
          <li><strong>✅ Expert Team:</strong> We bring experience, creativity, and dedication to every project.</li>
          <li><strong>🚀 Innovative Solutions:</strong> We work with the latest tech stacks to ensure your products are future-ready.</li>
          <li><strong>💬 Client-Centric Approach:</strong> We listen, adapt, and work closely with clients for best results.</li>
          <li><strong>🛡️ Quality & Security:</strong> Your trust matters — we deliver secure and reliable software.</li>
        </ul>

        <h2>Our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <h4>Karunakar</h4>
            <p>Founder & Tech Lead</p>
          </div>
          {/* You can add more team members like this */}
          {/* 
          <div className="team-member">
            <h4>Jane Doe</h4>
            <p>AI Developer</p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
