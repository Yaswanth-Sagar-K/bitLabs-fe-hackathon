import React from "react";
import { Link } from "react-router-dom";

const HackathonDetails = () => {
  const hackathon = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7dNYLrZTCGK3Qz0UNWQFrLL3ypKiNi1bFA&s",
    title: "AI Innovation Challenge 2024",
    description: `Join us for the most exciting AI innovation challenge of 2024! 
    This hackathon brings together developers, designers, and AI enthusiasts 
    from around the world to build revolutionary AI-powered applications.
    
    Participants will have access to cutting-edge AI tools, APIs, 
    and mentorship from industry experts. Whether you're a beginner or an expert, 
    this is your chance to push the boundaries of what's possible with AI.`,
    instructions: [
      "1. This should be done individually",
      "2. Submit your project by the deadline",
      "3. Include a working demo and source code",
      "4. Present your solution to the judging panel",
    ],
    startDate: "Jan 15, 2024",
    endDate: "Feb 15, 2024",
    duration: "4 weeks",
    participants: "1,245 registered",

  };

  return (
    <div className="dashboard__content">
      <div className="row mr-0 ml-10">
        <div className="col-lg-12 col-md-12">
          <div className="page-title-dashboard">
            <div className="title-dashboard">
              <div className="userName-title">
                AI Innovation Challenge 2024
              </div>
            </div>
          </div>
        </div>
        <div className="hackathon-banner">
          <img
            src={hackathon.img}
            alt={hackathon.title}
            className="hackathon-image"
          />
        </div>
        <div className="hackathon-container">
          {/* Left Content */}
          <div className="hackathon-left">
            <div className="card">
              <h3>Description</h3>
              <p>{hackathon.description}</p>
            </div>

            <div className="card">
              <h3>Instructions</h3>
              <ul>
                {hackathon.instructions.map((inst, index) => (
                  <li key={index}>{inst}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hackathon-right">
            <div className="card">
              <h4>Timeline</h4>
              <p><strong>Start Date:</strong> {hackathon.startDate}</p>
              <p><strong>End Date:</strong> {hackathon.endDate}</p>
              <p><strong>Duration:</strong> {hackathon.duration}</p>

              <p><strong>{hackathon.participants}</strong></p>


              <div className="resumecard-button">
                <Link
                  to="#"
                  className="button-link1"
                >
                  <span
                    className="button button-custom"
                  >
                    Register
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* CSS Styling */}
          <style>
            {`
            .hackathon-banner {
            width: 100%;
           
            height: 10%;
          }

          .hackathon-image {
            width: 100%;
            aspect-ratio: 3 / 1; 
            border-radius: 10px;
            object-fit: cover;
          }

          .hackathon-container {
            display: flex;
            gap: 20px;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          .hackathon-left {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .hackathon-right {
            flex: 1;
          }

          .card {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }

          h3, h4 {
            margin-bottom: 12px;
            color: #333;
          }

          p {
            margin: 8px 0;
            color: #555;
            line-height: 1.6;
          }

          ul {
            padding-left: 20px;
          }

          li {
            margin-bottom: 8px;
            color: #444;
          }

          .prize {
            color: #f97316;
            font-size: 20px;
            font-weight: bold;
          }

          .note {
            color: #777;
            font-size: 14px;
          }

          .register-btn {
            margin-top: 15px;
            width: 100%;
            padding: 12px;
            background-color: #f97316;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .register-btn:hover {
            background-color: #ea580c;
          }
        `}
          </style>
        </div>
      </div></div>
  );
};

export default HackathonDetails;
