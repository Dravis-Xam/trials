import React from "react";
import "./aboutTemp.css";

function Template({ item, index }) {
    return (
        <div className="template">
            <img src={item.photo || "default-image-url.jpg"} alt={item.title} className="backPhoto" />
            <div key={index} className="titleNamenImg">
                <h1>{item.title}</h1>
                <div className="titleDescr">
                    <p className="descr">{item.description}</p>
                    <a href={item.account.link} target="_blank" rel="noopener noreferrer">
                        <span className="acclink">
                            <img src={item.account.icon} alt={item.account.name} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Template;
