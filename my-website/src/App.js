import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Ethan Key, a software engineering student with a passion for building solutions that help others. Welcome to my personal site!</p>
      </section>
      
      <section id="projects">
        <h2>Projects</h2>
        <p>Here are a few of the projects I've worked on:</p>
        <ul>
          <li>Global Conflict Visualizer</li>
          <li>AccessiScan Chrome Extension</li>
          <li>More projects coming soon!</li>
        </ul>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </section>
    </div>
  );
}

export default App;
