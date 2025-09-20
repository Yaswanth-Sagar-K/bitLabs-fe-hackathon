import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./hackathon.css";
import { useUserContext } from "../common/UserProvider";
import { apiUrl } from "../../services/ApplicantAPIService";

const HackathonDetails = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const userId = user.id;
  const [hackathon, setHackathon] = useState(null);
  const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/applicant-submit-hackathon/${id}`);
  };

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const response = await axios.get(
          `${apiUrl}/api/hackathons/${id}/${userId}`,
          {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }
        );
        setHackathon(response.data);
      } catch (error) {
        console.error("Error fetching hackathon details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathon();
  }, [id, userId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!hackathon) return <div>No hackathon found.</div>;

function toDateObject(value) {
  if (!value) return null;
  if (typeof value === "number") {
    const d = new Date(value);
    return isNaN(d) ? null : d;
  }
  if (value instanceof Date) {
    return isNaN(value) ? null : value;
  }
  if (Array.isArray(value)) {
    const [year, month, day, hour = 0, minute = 0, second = 0, nano = 0] = value;
    const ms = Math.floor((nano || 0) / 1_000_000);
    const d = new Date(year, (month || 1) - 1, day || 1, hour, minute, second, ms);
    return isNaN(d) ? null : d;
  }
  if (typeof value === "string") {
    const d = new Date(value);
    return isNaN(d) ? null : d;
  }

  return null;
}

function formatToDateString(val) {
  const d = toDateObject(val);
  return d ? d.toDateString() : "Invalid date";
}


  return (
    <div className="dashboard__content">
      <div className="row mr-0 ml-10">
        <div className="col-lg-12 col-md-12">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row align-center-space">
                <div className="col-lg-12 col-md-12">
                  <div className="title-filter-wrapper">
                    <div className="title-dash">{hackathon.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Banner + Status Badge Overlay */}
          <div className="banner-wrapper">
            <img
              src={hackathon.bannerUrl}
              alt={hackathon.title}
              className="hackathon-banner"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/600x300?text=No+Image")
              }
            />
            <span
              className={`status-badge ${hackathon.status.toLowerCase()}`}
            >
              {hackathon.status}
            </span>
          </div>
<div className="card hackDes">
          <section>
            <h3>Description</h3>
            <p>{hackathon.description}</p>
          </section>

          <section>
            <h3>Instructions</h3>
            <ul>
              {hackathon.instructions.split("\n").map((line, index) => (
                <li key={index}>{line.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ul>
          </section>

          {/* Side by side Eligibility & Technologies */}
<div className="row side-by-side-section">
  <div className="col-md-6">
    <section>
      <h3>Eligibility Criteria</h3>
      <div className="tag-list">
        {hackathon.eligibility.split(",").map((item, index) => (
          <span key={index} className="tag">
            {item.trim()}
          </span>
        ))}
      </div>
    </section>
  </div>

  <div className="col-md-6">
    <section>
      <h3>Technologies to Use</h3>
      <div className="tag-list">
        {hackathon.allowedTechnologies.split(",").map((tech, index) => (
          <span key={index} className="tag tech-tag">
            {tech.trim()}
          </span>
        ))}
      </div>
    </section>
  </div>
</div>


          <section className="info-box">
            <div>
  <strong>Start Date</strong>
  <p>{formatToDateString(hackathon.startAt)}</p>
</div>
<div>
  <strong>End Date</strong>
  <p>{formatToDateString(hackathon.endAt)}</p>
</div>
<div>
  <strong>Organized By</strong>
  <p>{hackathon.company}</p>
</div>
<div>
  <strong>Created Date</strong>
  <p>{formatToDateString(hackathon.createdAt)}</p>
</div>

          </section>
           <div className="newCard-footer register">
          <button className="view-button" onClick={handleClick}>Register</button></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetails;
