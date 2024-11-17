import React from "react";
import Template from "./bodyComponents/aboutTemp";
import "./bodySection.css";
import laptop from "./bodyComponents/images/laptop.png";
import github from "./bodyComponents/images/Github.gif";
import pwonLp from "./bodyComponents/images/pwonLp.png";
import discord from "./bodyComponents/images/discord.gif";
import design from "./bodyComponents/images/design.png";
import youtube from "./bodyComponents/images/Youtube.gif";
import Socials from "./bodyComponents/socialMedia";

export default function Main() {
    const titleObjects = [
        {
            title: "Software Developer",
            photo: laptop, 
            description: "Experienced in building scalable web applications.",
            account: {
                name: "Github",
                link: "https://github.com/yourusername", 
                icon: github 
            }
        },
        {
            title: "Freelancer",
            photo: pwonLp, 
            description: "Freelance web and mobile app development.",
            account: {
                name: "Discord",
                link: "https://discord.com/users/yourid", 
                icon: discord
            }
        },
        {
            title: "Graphic Designer",
            photo: design,
            description: "Passionate about creating visually appealing designs.",
            account: {
                name: "Youtube",
                link: "https://youtube.com/channel/yourchannel", 
                icon: youtube 
            }
        }
    ];
    return (
        <section className="main-section">
            {titleObjects.map((item, index) => (
                <Template key={index} item={item} index={index}/>
            ))}
            <Socials />
        </section>
    );
}