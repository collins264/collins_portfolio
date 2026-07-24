import React from 'react';
import './App.css';
import photo from './photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src={photo} alt="Collins" className="profile-pic" />
        <h1>Collins Onyedikachi</h1>
        <p>Frontend Developer | React | UI/UX</p>
      </header>

      <section className="projects">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>Project 1: Portfolio Website</h3>
          <iframe src="https://your-project1-link.com" title="Project 1"></iframe>
        </div>

        <div className="project-card">
          <h3>Project 2: E-commerce App</h3>
          <iframe src="https://your-project2-link.com" title="Project 2"></iframe>
        </div>

        <div className="project-card">
          <h3>Project 3: Dashboard</h3>
          <iframe src="https://your-project3-link.com" title="Project 3"></iframe>
        </div>
      </section>

      <footer>
        <p>© 2026 Collins Onyedikachi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
