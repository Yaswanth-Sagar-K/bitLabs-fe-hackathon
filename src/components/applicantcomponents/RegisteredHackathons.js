import React from "react";

const RegisteredHackathons = () => {
  const hackathons = [
    {
      id: 1,
      title: "DeFi Developers Challenge",
      organizer: "Stark Industries",
      date: "June 15, 2024",
      status: "Pending Submission",
      statusType: "pending",
    },
    {
      id: 2,
      title: "HealthTech Innovations 2024",
      organizer: "Wayne Enterprises",
      date: "May 28, 2024",
      status: "Judging in Progress",
      statusType: "judging",
    },
    {
      id: 3,
      title: "Indie Game Dev Jam",
      organizer: "Oscorp",
      date: "April 10, 2024",
      status: "Completed",
      statusType: "completed",
    },
  ];

  const renderButton = (statusType) => {
    switch (statusType) {
      case "pending":
        return <button className="btn btn-orange">Submit Project</button>;
      case "judging":
        return <button className="btn btn-gray">View Submission</button>;
      case "completed":
        return <button className="btn btn-green">View Result</button>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard__content">
            <div className="row mr-0 ml-10">
                <div className="col-lg-12 col-md-12">
                    <div className="page-title-dashboard">
                        <div className="title-dashboard">
                            <div className="userName-title">
                                Registered Hackathon
                            </div>
                        </div>
                    </div>
                </div>
      <div className="card">
        <div className="table-header">
          <span>Hackathon Title</span>
          <span>Registration Date</span>
          <span>Status</span>
          <span></span>
        </div>

        {hackathons.map((hack) => (
          <div key={hack.id} className="table-row">
            <div className="title-cell">
              <strong>{hack.title}</strong>
              <p className="organizer">{hack.organizer}</p>
            </div>
            <div>{hack.date}</div>
            <div>
              <span
                className={`status-badge ${hack.statusType}`}
              >
                {hack.status}
              </span>
            </div>
            <div>{renderButton(hack.statusType)}</div>
          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .registered-container {
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          padding: 20px;
        }

        .table-header,
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          padding: 12px 0;
          align-items: center;
          border-bottom: 1px solid #eee;
        }

        .table-header {
          font-weight: bold;
          color: #444;
        }

        .title-cell {
          display: flex;
          flex-direction: column;
        }

        .organizer {
          font-size: 13px;
          color: #777;
          margin-top: 2px;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: bold;
        }

        .status-badge.pending {
          background: #fff7ed;
          color: #f97316;
        }

        .status-badge.judging {
          background: #eef2ff;
          color: #6366f1;
        }

        .status-badge.completed {
          background: #ecfdf5;
          color: #10b981;
        }

        .btn {
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-orange {
          background: #f97316;
          color: white;
        }

        .btn-orange:hover {
          background: #ea580c;
        }

        .btn-gray {
          background: #e5e7eb;
          color: #374151;
        }

        .btn-gray:hover {
          background: #d1d5db;
        }

        .btn-green {
          background: #10b981;
          color: white;
        }

        .btn-green:hover {
          background: #059669;
        }
      `}</style>
    </div>
    </div>
  );
};

export default RegisteredHackathons;
