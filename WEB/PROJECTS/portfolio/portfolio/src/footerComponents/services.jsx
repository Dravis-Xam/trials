import React from "react";
import "./services.css";

export default function Services() {
    return(
        <div className="services">
            <h1 className="serTitle">Services</h1>
            <div>
                <a href="">
                    <i>
                        Web Development
                    </i>
                </a>
            </div>
            <div>
                <a href="">
                    <i>
                        Graphic Design
                    </i>
                </a>
            </div>
            <div>
                <a href="">
                    <i>
                        Hackathon
                    </i>
                </a>
            </div>
            <div>
                <a href="">
                    <i>
                        Mobile App Development
                    </i>
                </a>
            </div>
        </div>
    );
}