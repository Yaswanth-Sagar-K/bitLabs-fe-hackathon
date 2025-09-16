import { Link } from "react-router-dom";

const AllHackathons = () => {

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
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFR30R-Gi1amxSIKdj8mhnKWSYbLAG_7EJeg&s",
    title: "AI Innovation Challenge",
    organizer: "FutureTech Labs",
    date: "Mar 15-17, 2025",
    tags: ["AI", "ML", "Data Science"],
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJquT-gAIwKxgcF9Ouitc-KIvTTZgih7H8A&s",
    title: "FinTech Disruption Hackathon",
    organizer: "FinEdge",
    date: "Apr 5-7, 2025",
    tags: ["Finance", "Payments", "Blockchain"],
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp-oHs8cRRa9ImO4aROPE925aXz_IgyUMHA&s",
    title: "EdTech Hackfest",
    organizer: "LearnX Global",
    date: "May 12-14, 2025",
    tags: ["Education", "AI", "Learning"],
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD9oIhlimg26GueoXoS-WWU7zJEQS_n0r_Q&s",
    title: "AgriTech Challenge",
    organizer: "FarmTech Solutions",
    date: "Jun 1-3, 2025",
    tags: ["Agriculture", "IoT", "Sustainability"],
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYZDsmZAHRzFNu9wFL6C3XJ4SCEs8DRVnVw&s",
    title: "Cybersecurity Hackathon",
    organizer: "SecureNet Labs",
    date: "Jul 8-10, 2025",
    tags: ["Security", "Hacking", "Networking"],
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxvV450mt6W4n4ZOKt9h9pcnhI2ppjeO-iw&s",
    title: "SpaceTech Hackathon",
    organizer: "Cosmos Research",
    date: "Aug 20-22, 2025",
    tags: ["Space", "Robotics", "AI"],
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0CE8uOaL3901K8NUnc3yPw9RHPqJgHU2WQ&s",
    title: "Climate Action Hack",
    organizer: "EarthCare Org",
    date: "Sep 10-12, 2025",
    tags: ["Climate", "Renewable Energy", "GreenTech"],
  },
];


return(
        <div className="dashboard__content">
            <div className="row mr-0 ml-10">
                <div className="col-lg-12 col-md-12">
                    <div className="page-title-dashboard">
                        <div className="title-dashboard">
                            <div className="userName-title">
                                All Hackathon
                            </div>
                        </div>
                    </div>
                </div>
     <div className="row g-4">
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

)

}

export default AllHackathons;