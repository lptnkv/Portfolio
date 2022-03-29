import React from "react";

export default function Main() {
    return (
        <div className="info-section">
            <h1 className="info-name">Kirill Lipatnikov</h1>
            <h5 className="info-job">Frontend developer</h5>
            <h6 className="info-email">lipatnikov.ks@gmail.com</h6>
            <div className="info-buttons-container">
                <div>
                    <button className="info-buttons-email">Email</button>
                    <button className="info-buttons-linkedin">LinkedIn</button>
                </div>
            </div>
            <div className="info-about-section">
                <h2>
                    About
                </h2>
                <p>
                    I am MIREA student and future frontend developer. I want to work in PROFI.
                    I am MIREA student and future frontend developer. I want to work in PROFI.
                    I am MIREA student and future frontend developer. I want to work in PROFI.
                </p>
            </div>
            <div className="info-interests-section">
                <h2>
                    Interests
                </h2>
                <p>
                    Plaiyng a guitar. Solving Rubik's cube. Doing sports. Listening to electronic music and hip-hop. Travelling. Swimming. Drawing and doodling. Web programming. Designing user interfaces.
                </p>
            </div>
        </div>
    )
}