import React from "react";
import "../styles/Home.css";

const redirectToLinkedIn = () => {
  window.location.href = 'https://www.linkedin.com/in/tumelo-rabale-01a5b627a';
};

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div><h2> "Hi, My Name is Tumelo Rabale"</h2></div>
        <div className="prompt">
          <p>I am Front-End developer with passion for 
          creating engaging and interactive web experiences.</p>
          <button className="button" onClick={redirectToLinkedIn}><b>Go to Linkedin</b></button>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript, NPM,
              BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL,SQL,Python,Flask
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home; 