import React from "react";
import "./hackathon.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hackathon = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
    navigate("/applicant-all-hackathons");
  };
    const hackathons = [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7dNYLrZTCGK3Qz0UNWQFrLL3ypKiNi1bFA&s",
            title: "Web3 DeFi Challenge",
            organizer: "Blockchain Innovations",
            date: "Dec 1-3, 2024",
            tags: ["Web3", "DeFi", "Blockchain"],
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vJ-pC3qiq73ALrrJArw9rfP3jsYxyaVLTA&s",
            title: "Sustainable Cities Hack",
            organizer: "Green Solutions Inc.",
            date: "Jan 10-12, 2025",
            tags: ["Environment", "Smart City", "IoT"],
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwsBX0uVxBDnReGmJ8XRBFzn47Pl65VIHaQ&s",
            title: "HealthTech Innovations",
            organizer: "MedConnect Global",
            date: "Feb 20-22, 2025",
            tags: ["Healthcare", "AI", "MedTech"],
        },
    ];

    return (
        <div className="dashboard__content">
            <div className="row mr-0 ml-10">
                <div className="col-lg-12 col-md-12">
                    <div className="page-title-dashboard">
                        <div className="title-dashboard">
                            <div className="userName-title">
                                Hackathon
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="row dash-count">
                        <div className="col-12 col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 display-flex">

                            <div className="card" style={{ cursor: "pointer" }}>
                                <div className="container">
                                    <div>
                                        <span className="icon-bag color-icon-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" 
     className="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2 1h12a1 1 0 0 1 1 1v1a5 5 0 0 1-4.546 4.975 5.001 
           5.001 0 0 1-3.908 3.908V13h2a1 1 0 0 1 1 1v1H6v-1a1 1 
           0 0 1 1-1h2v-1.117a5.001 5.001 0 0 1-3.908-3.908A5 5 0 
           0 1 1 3V2a1 1 0 0 1 1-1zm1 2v1a3 3 0 0 0 6 0V3H3zm9 0h-2v1a4 
           4 0 0 0 4-4V2a1 1 0 0 1-1 1z"/>
</svg>

                                        </span>
                                    </div>
                                    <div className="content" onClick={() => navigate("/applicant-all-hackathons")}>
                                        <span
                                            className="title-count"
                                            style={{ cursor: "pointer" }}
                                        >
                                            All Hackathons
                                        </span>
                                        <h3>12</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 display-flex">
                            <div className="card" style={{ cursor: "pointer" }}>
                                <div className="container">
                                    <div>
                                        <span className="icon-bag color-icon-2">
                                           <svg xmlns="http://www.w3.org/2000/svg" 
     width="32" height="32" 
     fill="currentColor" 
     viewBox="0 0 24 24">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 
           10 10-4.5 10-10S17.5 2 12 2zm-1.2 
           14.3-4.1-4.1 1.4-1.4 2.7 2.7 
           5.9-5.9 1.4 1.4-7.3 7.3z"/>
</svg>


                                        </span>
                                    </div>
                                    <div className="content" onClick={() => navigate("/applicant-registered-hackathons")}>
                                        <span
                                            className="title-count"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Registered
                                        </span>
                                        <h3>3</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 display-flex">
                            <div className="card" style={{ cursor: "pointer" }}>
                                <div className="container">
                                    <div>
                                        <span className="icon-bag color-icon-3">
  <svg xmlns="http://www.w3.org/2000/svg" 
     width="32" height="32" 
     fill="currentColor" 
     viewBox="0 0 24 24">
  <path d="M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 
           2 0v-5h5.586l1.707 1.707a1 1 0 0 
           0 1.414 0l4.293-4.293a1 1 0 0 
           0 0-1.414l-4.293-4.293a1 1 0 0 
           0-1.414 0L13.586 9H7V4a1 1 0 0 
           0-1-1z"/>
</svg>


                                        </span>
                                    </div>
                                    <div className="content">
                                        <span
                                            className="title-count"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Completed
                                        </span>
                                        <h3>1</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-12 col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 display-flex certificatebox">
                    <div className="card" style={{ cursor: "pointer", backgroundColor: '#FFF9E3'}}>
                        <div className="resumecard">
                            <div className="resumecard-content">
                                <div className="resumecard-text">
                                    <div className="resumecard-heading">
                                        <h2 className="heading1">AI Innovation Challenge</h2>
                                        <div className="title-count">
                                            Build the next generation of AI-powered applications.
                                        </div>
                                    </div>
                                    <div className="resumecard-button">
                                        <Link
                                            to="/applicant-hackathon-details"
                                            className="button-link1"
                                        >
                                            <span
                                                className="button button-custom"
                                            >
                                                Participate
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="resumecard-icon">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwUENcWhlNgEKoA7_Mm5XA6or0ZCLDkObUg&s"
                                        alt="Hackathon Trophy"
                                        style={{
                                            width: "273px",
                                            height: "auto",
                                            objectFit: "contain",
                                            marginTop: "10px",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            <div className="row g-4">
            <h3 className="fw-bold mb-4">Featured Hackathons</h3>
                {hackathons.map((hack, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card h-100 shadow-sm hackathon-card">
                            <img
                                src={hack.img}
                                className="card-img-top"
                                alt={hack.title}
                                style={{ height: "160px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-dark fw-bold">{hack.title}</h5>
                                <p className="text-muted mb-1">{hack.organizer}</p>
                                <p className="text-muted small">
                                    <i className="bi bi-calendar-event me-2"></i>
                                    {hack.date}
                                </p>

                                {/* Tags */}
                                <div className="mb-3">
                                    {hack.tags.map((tag, i) => (
                                        <span key={i} className="badge btn-orange text-dark me-2">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons at bottom */}
                                                                 
                                    <div className="resumecard-button">
                                        <Link
                                            to="/applicant-hackathon-details"
                                            className="button-link1"
                                        >
                                            <span
                                                className="button button-custom"
                                            >
                                                Participate
                                            </span>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
                            </div>
            </div>
        </div>


    );
};

export default Hackathon;
