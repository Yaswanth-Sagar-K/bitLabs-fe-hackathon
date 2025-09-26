import React, { useEffect, useState } from "react";
import "./hackathon.css";
import { apiUrl } from "../../services/ApplicantAPIService";
import axios from "axios";
import { useUserContext } from "../common/UserProvider";
import { useNavigate } from "react-router-dom";

const Hackathon = () => {
  const [hackathons, setHackathons] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [winners, setWinners] = useState({}); // NEW: winner info map
  const [searchField, setSearchField] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("MY");
  const [loading, setLoading] = useState(false);

  const { user } = useUserContext();
  const userId = user.id;
  const navigate = useNavigate();

  const getLabel = (field) => {
    switch (field) {
      case "title": return "Title";
      case "eligibility": return "Eligibility";
      case "allowedTechnologies": return "Technologies";
      case "startAt": return "Start Date";
      case "endAt": return "End Date";
      default: return "All";
    }
  };

  const getApiUrlByTab = (tabKey) => {
    switch (tabKey) {
      case "RECOMMENDED": return `${apiUrl}/api/hackathons/recommended/${userId}`;
      case "ACTIVE": return `${apiUrl}/api/hackathons/active`;
      case "UPCOMING": return `${apiUrl}/api/hackathons/upcoming`;
      case "COMPLETED": return `${apiUrl}/api/hackathons/completed`;
      case "MY":
      default: return `${apiUrl}/api/hackathons/applicant/${userId}`;
    }
  };

  const fetchHackathons = async (tabKey) => {
    try {
      setLoading(true);
      const jwtToken = localStorage.getItem("jwtToken");

      const response = await axios.get(getApiUrlByTab(tabKey), {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      const normalized = response.data
        .map((h) => {
          const toDate = (arr) => {
            if (!arr) return null;
            const [year, month = 1, day = 1, hour = 0, minute = 0, second = 0, nano = 0] = arr;
            return new Date(year, month - 1, day, hour, minute, second, Math.floor(nano / 1_000_000));
          };
          return {
            ...h,
            startAt: h.startAt ? toDate(h.startAt) : null,
            endAt: h.endAt ? toDate(h.endAt) : null,
            createdAt: h.createdAt ? toDate(h.createdAt) : null,
          };
        })
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      setHackathons(normalized);

      if (tabKey === "COMPLETED" || tabKey === "MY") {
        const winnerIds = [...new Set(normalized.map(h => h.winner).filter(Boolean))];
        if (winnerIds.length > 0) {
          const winnersResponse = await axios.post(
            `${apiUrl}/applicant-image/hackathon/winners`,
            winnerIds,
            { headers: { Authorization: `Bearer ${jwtToken}` } }
          );
          const winnersMap = {};
          winnersResponse.data.forEach(w => {
            winnersMap[w.applicantId] = w;
          });
          setWinners(winnersMap);
        }
      } else {
        setWinners({});
      }
    } catch (error) {
      console.error("Error fetching hackathons:", error);
      setHackathons([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrations = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await axios.get(
        `${apiUrl}/hackathons/applicant/${userId}/getAllRegistrations`,
        { headers: { Authorization: `Bearer ${jwtToken}` } }
      );
      setRegistrations(response.data || []);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      setRegistrations([]);
    }
  };

  useEffect(() => {
    fetchHackathons(statusFilter);
    fetchRegistrations();
  }, [statusFilter]);

  const filteredHackathons = hackathons.filter(h => {
    if (searchField === "all") {
      return Object.values(h).some(val =>
        val?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return h[searchField]?.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleViewClick = (hackathonId) => navigate(`/applicant-hackathon-details/${hackathonId}`);

  const getRegistrationStatus = (hackathonId) => {
    const reg = registrations.find(r => r.hackathonId === hackathonId);
    if (!reg) return null;
    if (reg.submitStatus) return "Submitted";
    if (reg.registaratinStatus) return "Registered";
    return null;
  };

  return (
    <div className="dashboard__content">
      <div className="row mr-0 ml-10" style={{ marginRight: "2%" }}>
        <div className="header-container">
          <div className="status-tabs">
            {[
              { key: "MY", label: "My Arena" },
              { key: "RECOMMENDED", label: "Picks For You" },
              { key: "ACTIVE", label: "In Action" },
              { key: "UPCOMING", label: "On the Horizon" },
              { key: "COMPLETED", label: "Past Battles" },
            ].map(tab => (
              <button
                key={tab.key}
                className={`tab ${statusFilter === tab.key ? "active" : ""}`}
                onClick={() => setStatusFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="filter-section">
            <div className="filter-box custom-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {getLabel(searchField)} <span className="arrow">▼</span>
              {dropdownOpen && (
                <ul className="dropdown-list">
                  {[
                    { value: "all", label: "All" },
                    { value: "title", label: "Title" },
                    { value: "eligibility", label: "Eligibility" },
                    { value: "allowedTechnologies", label: "Technologies" },
                    { value: "startAt", label: "Start Date" },
                    { value: "endAt", label: "End Date" },
                  ].map(option => (
                    <li key={option.value} onClick={() => { setSearchField(option.value); setDropdownOpen(false); }}>
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="search-box">
              <input
                type="text"
                placeholder={`Search by ${getLabel(searchField)}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="loading"></div>
        ) : (
          <div className="newCards-grid">
            {filteredHackathons.map(hackathon => {
              const today = new Date();
              const startDate = new Date(hackathon.startAt);
              const endDate = new Date(hackathon.endAt);

              let remainingText = "";
              if (hackathon.status === "ACTIVE") {
                const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
                remainingText = diffDays > 0 ? `Ends in ${diffDays} days` : "Ends today";
              } else if (hackathon.status === "UPCOMING") {
                const diffDays = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
                remainingText = diffDays > 0 ? `Starts in ${diffDays} days` : "Starting soon";
              } else if (hackathon.status === "COMPLETED") {
                remainingText = "Completed";
              }

              const regStatus = getRegistrationStatus(hackathon.id);
              const winnerInfo = winners[hackathon.winner];

              return (
                <div className="newCard" key={hackathon.id} style={{ position: "relative" }}>
                  <span className={`status-badge ${hackathon.status.toLowerCase()}`}>{hackathon.status}</span>

                  <img
                    src={hackathon.bannerUrl}
                    alt={hackathon.title}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")}
                  />

                  <div className="newCard-body">
                    <h5>{hackathon.company}</h5>
                    <h3>{hackathon.title}</h3>
                    <p className="tech">{hackathon.allowedTechnologies}</p>

                    {regStatus && (
                      <p className="registration-status">
                        <span className="tick-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 16 16">
                            <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-8.25 8.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06l3.72 3.72 7.72-7.72z" />
                          </svg>
                        </span>
                        {regStatus}
                      </p>
                    )}
                  </div>

                 {(statusFilter === "COMPLETED" || statusFilter === "MY") && winnerInfo?.firstName && winnerInfo?.lastName && (
  <div className="winner-card" data-name={`${winnerInfo.firstName} ${winnerInfo.lastName}`}>
    <div className="winner-card-content">
      <img
        src={winnerInfo.imageUrl || "../images/user/avatar/image-01.jpg"}
        alt={`${winnerInfo.firstName} ${winnerInfo.lastName}`}
        className="winner-image"
      />
    </div>
    <div className="winner-overlay">
      <h4 className="winner-heading">Top Performer</h4>
      <img
        src={winnerInfo.imageUrl || "../images/user/avatar/image-01.jpg"}
        alt={`${winnerInfo.firstName} ${winnerInfo.lastName}`}
        className="winner-image-overlay"
      />
      <span className="winner-name">
        {winnerInfo.firstName} {winnerInfo.lastName}
      </span>
    </div>
  </div>
)}


                  <div className="newCard-footer">
                    <p className="remaining">{remainingText}</p>
                    <button className="view-button" onClick={() => handleViewClick(hackathon.id)}>
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathon;
