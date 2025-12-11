import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CaregiverDashboard from "./CaregiverDashboard";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
       <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <header id="home" className="hero">
                <div className="hero-overlay">
                  <h1>Bridging Memories with Empathy</h1>
                  <p>
                    MemoryLink delivers voice-based cognitive therapy for dementia patients using AI-generated voices of loved ones — even in the most remote villages.
                  </p>
                </div>
              </header>

              <section id="features" className="features">
                <h2>Key Features</h2>
                <div className="feature-grid">
                  <div className="feature-card">
                    <h3>Telephony-Based Access</h3>
                    <p>Our service works over basic phone calls — no smartphone or internet needed. Therapy can reach anyone, anywhere.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Voice Cloning</h3>
                    <p>We clone the voices of familiar caregivers, making therapy more personal, calming, and emotionally effective.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Real-Time Emotion Detection</h3>
                    <p>We listen for emotional cues like stress, sadness, or joy, and adapt therapy instantly using AI sentiment analysis.</p>
                  </div>
                  <div className="feature-card">
                    <h3>Caregiver Dashboard</h3>
                    <p>Upload old memories, schedule therapy sessions, and track patient progress from an easy web portal.</p>
                  </div>
                </div>
              </section>

              <section id="about" className="about">
                <h2>Understanding Dementia and Our Purpose</h2>
                <p>
                  Dementia is more than just memory loss — it gradually erodes a person’s ability to think, communicate, and connect with loved ones. It causes confusion, emotional distress, and social isolation, especially in underserved regions where access to therapy is nearly impossible.
                </p>
                <p>
                  While hospitals offer diagnosis, continuous therapy is rare — especially in rural areas where digital literacy, affordability, and infrastructure are major barriers. Patients are often left with silence, even when a phone is within reach.
                </p>
                <br />
                <h3>Why MemoryLink?</h3>
                <p>
                  <strong>MemoryLink</strong> is a compassionate AI-powered teletherapy platform that brings cognitive support to dementia patients — not through screens or apps, but through <strong>simple phone calls</strong>. We use <em>AI voice cloning</em> to recreate the voices of familiar caregivers and loved ones, helping patients reconnect emotionally, remember meaningful moments, and reduce anxiety during sessions.
                </p>
                <p>
                  By detecting emotions in real time, MemoryLink can adapt therapy sessions based on the patient’s mental state. Our caregiver dashboard enables families to upload custom therapy cues like stories, songs, or names — making each session truly personal.
                </p>
                <br />
                <h3>What Makes Us Different</h3>
                <ul className="info-list">
                  <li>✔️ Requires only a phone call — no internet or app</li>
                  <li>✔️ Uses emotionally familiar AI-generated voices</li>
                  <li>✔️ Detects mood & sentiment through voice analysis</li>
                  <li>✔️ Caregivers can customize therapy remotely</li>
                  <li>✔️ Designed for rural and remote care scenarios</li>
                </ul>
              </section>

              <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>📧 Email: memorylink@healthai.org</p>
                <p>📞 Phone: +91-9876543210</p>
                <p>🌐 Website: www.memorylink.ai</p>
              </section>

              <footer className="footer">
                <p>© 2025 MemoryLink. All rights reserved.</p>
              </footer>
            </>
          }
        />
        <Route path="/dashboard" element={<CaregiverDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
