import React from "react";
import mock10 from '../assets/images/mock05-new.png';
import mock05 from '../assets/images/mock10-new.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Netflix Dashboard</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={mock10} target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Netflix Dashboard</h2>
                <p>The Netflix Power BI dashboard visualizes content trends, genres, and user insights through interactive charts. It enables easy analysis of data with filters, helping users explore patterns and make data-driven decisions.</p>
            </div>
            <div className="project">
                <a href={mock05} target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <h2>Sales Insight Power BI</h2>
                <p>The Sales Insight Power BI dashboard provides a clear overview of revenue, profit, and sales trends through interactive visuals. It helps users analyze performance, identify top products or regions, and make informed business decisions.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;