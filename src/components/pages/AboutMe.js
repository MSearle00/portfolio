import React from 'react';
import Footer from '../Footer';
import './AboutMe.css';

export default function AboutMe() {
  return(

		<div class="main-container">
				<div class="aboutMe">

					<p>I am currently a Junior Developer, with experience in Front-End Development.</p>
          <br></br>
					<p> I hope to continually improve my skills and knowledge, through both the front end and backend.</p>
          <br></br>
          <p>At the moment I'm studying C++ and C#!</p>

        </div>

          {/* SKILLS */}
          <div class="gridContainer">
            <div class="gridWrapper">
            <h4 class="subtitle">MY SKILLS</h4>
              <div class="skills">
                <ul class="front-end-skills">
                  <strong>FRONT-END:</strong>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
                <ul class="back-end-skills">
                  <strong>BACK-END: </strong>
                  <li>Redux</li>
                  <li>API Calls</li>
                  <li>Express</li>
                  <li>Mongo</li>
                  <li>Basic SQL</li>
                </ul>
              </div>
            </div>


            {/* TECHNOLOGIES */}
            <div class="gridWrapper">
              <h4 class="subtitle"> TECHNOLOGIES</h4>
              <div class="technologies">
              <ul>
                <li> GIT </li>
                <li> Sourcetree</li>
                <li>Github</li>
                <li>Bitbucket</li>
                <li>MongoDB Compass & Atlas</li>
                <li>Postman</li>
                <li>Visual Studio Code</li>
                <li>Visual Studio 2019</li>
                <li>SpringToolSuite4</li>
                <li>Docker</li>
                <li>Atlassian Group (Jira, Tempo, Confluence)</li>
              </ul>
              </div>
            </div>


            {/* EDUCATION */}
            <div class="gridWrapper">
              <h4 class="subtitle"> EDUCATION / QUALIFICATIONS</h4>
              <div class="education">
                <ul>
                  <li> The Developer Academy, Part Time Bootcamp || 2020 - 2021</li>
                  <li> HNC Computing - Merit || Sheffield College || 2019 - 2020</li>
                  <li> A Level Computing - E || King Edwards VII || 2017 - 2019 </li>
                  <li> GCSE Computing - A || King Edwards VII || 2015 - 2017 </li>
                </ul>
              </div>
            </div>
          </div>

    <Footer />
    </div>
  )
}
