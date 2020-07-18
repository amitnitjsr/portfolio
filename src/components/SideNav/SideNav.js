import React from 'react';
import Photo from '../image/image.jpg';
import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={Photo}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Amit Maurya</h2>
            <p className="subtitle">React JS Developer</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};