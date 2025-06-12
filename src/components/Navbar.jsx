// import { Link } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>SK Technologies</h2>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <nav className="navbar">
        {/* <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="SK Technologies" />
        </Link> */}
        {/* <span>SK Technologies</span> Optional text beside logo */}
      {/* </div> */}
      <div className="navbar-logo">SK Technologies</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
