import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

function CaregiverDashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Caregiver Dashboard</h2>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Upload Memory</h3>
          <p>Add photos, voice clips, or written stories to personalize therapy sessions.</p>
          <button className="dashboard-btn">Upload</button>
        </div>

        <div className="dashboard-card">
          <h3>Schedule Session</h3>
          <p>Choose date and time to automatically call patients with memory therapy.</p>
          <button className="dashboard-btn">Schedule</button>
        </div>

        <div className="dashboard-card">
          <h3>Track Progress</h3>
          <p>View emotional response analysis and therapy feedback from past sessions.</p>
          <button className="dashboard-btn">View Reports</button>
        </div>

        <div className="dashboard-card">
          <h3>Manage Voice Clones</h3>
          <p>Update the AI-generated voice for more emotional familiarity.</p>
          <button className="dashboard-btn">Manage Voices</button>
        </div>
      </div>
      <Link to="/" className="dashboard-back-btn">← Back to Home</Link>
    </section>
  );
}

export default CaregiverDashboard;
