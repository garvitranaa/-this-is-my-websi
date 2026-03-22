import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025-26"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development & Technical Skills</h3>
            <h4 className="vertical-timeline-element-subtitle">Projects & Collaborations</h4>
            <p>
              Applied web development knowledge in projects and collaborations. Worked with React.js, Node.js, Express.js, MongoDB, Firebase. Focused on responsive design, optimization, and version control (Git/GitHub).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mid 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PR Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Yung Drip Clothing</h4>
            <p>
              Expanded role at Yung Drip Clothing to include Public Relations. Crafted press releases, conducted influencer outreach, and assisted in events. Strengthened skills in brand communication and stakeholder management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Early 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Social Media Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Yung Drip Clothing</h4>
            <p>
              Created and curated content for Instagram, Facebook, TikTok. Managed community engagement and analyzed campaign performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 26"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">BCA (Bachelor of Computer Applications)</h4>
            <p>
              Built foundation in web development, programming, and digital technologies. Learned basics of HTML, CSS, JavaScript, and other tech fundamentals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;