// export default function Home() {
//   return (
//     <div className="page">
//       <h1>Welcome to SK Technologies</h1>
//       <p>
//         SK Technologies is your trusted partner for software services, website development,
//         and innovative tech solutions. We empower small businesses and startups with modern,
//         effective digital tools.
//       </p>
//       <p>
//         Whether you're looking to build a simple website or a full-stack application,
//         we've got you covered.
//       </p>
//     </div>
//   );
// }
import './Home.css';

export default function Home() {
    return (
        <>
        <div className="home-banner">
            <div className="home-overlay">
                {/* <img src="/background.avif" alt="SK Technologies Banner" style={{ width: "100%", height: "auto", borderRadius: "15px" }} /> */}

                <h1>Welcome to SK Technologies</h1>
                <p>
                    Empowering digital solutions for your business. From stunning websites to custom software —
                    we deliver quality, innovation, and support every step of the way.
                </p>
                <button className="home-btn">Explore Services</button>

            </div>
            </div>    

            <div className="testimonial-section">
                <h2>What Our Clients & Students Say</h2>
                <div className="testimonial-list">
                    <div className="testimonial-item">
                        <p>“The MERN stack training was fantastic. I built my first real project here!”</p>
                        <h4>- Ayesha, Student</h4>
                    </div>
                    <div className="testimonial-item">
                        <p>“SK Technologies developed our web app quickly and professionally.”</p>
                        <h4>- Mahesh, Business Owner</h4>
                    </div>
                    <div className="testimonial-item">
                        <p>“Highly recommend their AI course. It’s hands-on and industry-focused.”</p>
                        <h4>- Sravan, AI Enthusiast</h4>
                    </div>
                </div>
            </div>
        </>        

    );
}
