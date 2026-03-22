import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Canva",
    "Adobe Photoshop",
    "Buffer",
    "Google Analytics"
];

const labelsSecond = [
    "Muck Rack",
    "Cision",
    "Mailchimp",
    "Slack",
    "Google Docs"
];

const labelsThird = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Social Media Management</h3>
                    <p>Expert in managing social media platforms, creating engaging content, growing online communities, and analyzing campaign performance. Skilled in Instagram, Facebook, and TikTok strategies to enhance brand visibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Public Relations (PR)</h3>
                    <p>Experienced in crafting press releases, media outreach, influencer collaborations, and event promotions. Focused on building brand reputation and stakeholder communication.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Web Development</h3>
                    <p>Proficient in building responsive websites and landing pages, with knowledge of frontend and backend development. Skilled in website optimization and version control for collaborative projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;