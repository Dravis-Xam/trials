import React from "react";
import "./aboutTemp.css";

function Template({ item, index }) {
    return (
        <div className="template">
            <div key={index} className="titleNamenImg">
                <h1>{item.title}</h1>
                <img src={item.photo || "#"} alt={item.title} />

                <div className="titleDescr">
                    <p className="descr">{item.description}</p>
                    <a href={item.account.link} target="_blank" rel="noopener noreferrer">
                        <span className="acclink">
                            {item.account.name}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Template;
