import './Training.css';

export default function Training() {
    return (
        <div className="page-wrapper">

            <div className="training-container">
                <h1>Training Programs at SK Technologies</h1>
                <p>
                    At SK Technologies, we are committed to empowering students and professionals with practical knowledge through our focused training programs. Our courses are tailored to meet industry standards and equip learners with hands-on experience.
                </p>

                <div className="course-list">
                    <div className="course-card">
                        <h3>🌐 MERN Stack Development</h3>
                        <p>Learn to build full-stack web applications using MongoDB, Express.js, React, and Node.js. Perfect for those aiming for a career in modern web development.</p>
                    </div>
                    <div className="course-card">
                        <h3>📱 React Native with Expo</h3>
                        <p>Master mobile app development for Android and iOS using Expo and React Native. No prior native development experience required.</p>
                    </div>
                    <div className="course-card">
                        <h3>🤖 AI & Machine Learning</h3>
                        <p>Dive into the world of Artificial Intelligence with real-time projects, ML models, and practical applications including chatbots, data analysis, and automation.</p>
                    </div>
                </div>

                <div className="cta-box">
                    <h4>Interested in joining?</h4>
                    <a href="/contact" className="cta-btn">Contact Us for Enrollment</a>
                </div>


                <div className="form-section">
                    <h2>Register for Training</h2>
                    <form className="register-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <select required>
                            <option value="">Select Course</option>
                            <option value="mern">MERN Stack</option>
                            <option value="expo">React Native / Expo</option>
                            <option value="ai">AI & ML</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="schedule-section">
                    <h2>Upcoming Batches</h2>
                    <table className="schedule-table">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Start Date</th>
                                <th>Duration</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MERN Stack</td>
                                <td>July 1, 2025</td>
                                <td>6 Weeks</td>
                                <td>Online</td>
                            </tr>
                            <tr>
                                <td>React Native / Expo</td>
                                <td>July 8, 2025</td>
                                <td>5 Weeks</td>
                                <td>Hybrid</td>
                            </tr>
                            <tr>
                                <td>AI & ML</td>
                                <td>July 15, 2025</td>
                                <td>8 Weeks</td>
                                <td>Online</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h4>Q: Do I need prior coding experience?</h4>
                    <p>A: No. Our courses are designed for beginners as well as experienced developers.</p>
                </div>
                <div className="faq-item">
                    <h4>Q: Do you provide certificates?</h4>
                    <p>A: Yes. We provide recognized certificates after successful course completion.</p>
                </div>
                <div className="faq-item">
                    <h4>Q: Are the courses online or offline?</h4>
                    <p>A: Currently, all training is offered online. We may start offline batches soon.</p>
                </div>
            </div>

        </div>
    );
}
