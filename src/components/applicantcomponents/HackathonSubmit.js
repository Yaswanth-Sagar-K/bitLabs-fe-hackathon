import React, { useState } from "react";
import axios from "axios";
import "./hackathon.css";

const ProjectSubmissionForm = ({ hackathonId }) => {
  const [formData, setFormData] = useState({
    registrationId: "101",
    userId: "2",
    projectTitle: "",
    projectSummary: "",
    useCase: "",
    technologiesUsed: "",
    githubLink: "",
    demoLink: "",
    submissionDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post(`/api/hackathons/${hackathonId}/submit`, formData);
      setMessage("Project submitted successfully ✅");
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit project ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard__content">
      <div className="row mr-0 ml-10">
        <div className="col-lg-12 col-md-12">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row align-center-space">
                <div className="col-lg-12 col-md-12">
                  <div className="title-filter-wrapper">
                    <div className="title-dash">Submit Your Project</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
<div className="card widthsize">
          <p className="text-gray-500 text-sm mb-4">
            Fill in the details below to submit your hackathon project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                name="projectTitle"
                placeholder="Enter your project title"
                value={formData.projectTitle}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project Summary</label>
              <textarea
                name="projectSummary"
                placeholder="Provide a brief overview of your project"
                value={formData.projectSummary}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 h-24 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Use Case</label>
              <input
                type="text"
                name="useCase"
                placeholder="Describe the use case of your project"
                value={formData.useCase}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
              <input
                type="text"
                name="technologiesUsed"
                placeholder="e.g., React, Node.js, Tailwind CSS"
                value={formData.technologiesUsed}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub Link</label>
              <input
                type="url"
                name="githubLink"
                placeholder="https://github.com/user/repo"
                value={formData.githubLink}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Demo Link</label>
              <input
                type="url"
                name="demoLink"
                placeholder="https://your-project-demo.com"
                value={formData.demoLink}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

           <div className="newCard-footer register">
          <button className="view-button" type="submit" disabled={loading}>submit</button></div>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm font-medium">{message}</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmissionForm;