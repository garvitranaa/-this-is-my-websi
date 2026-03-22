import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

import garvitAvatar from '../assets/images/garvit-avatar.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/garvitrana" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/garvitrana/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div className="profile-header">
            <div className="profile-image">
              <img src={garvitAvatar} alt="Garvit Rana" />
            </div>
            <div className="name-title">
              <h1>Garvit Rana</h1>
              <p>Social Media Manager</p>
            </div>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/garvitrana" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/garvitrana/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;