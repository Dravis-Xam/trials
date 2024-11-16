import React from "react";
import Template from "./bodyComponents/aboutTemp";
import "./bodySection.css";

export default function Main() {
    const titleObjects = [
        {
            title: "Software Developer",
            photo: "link_to_software_dev_image", 
            description: "Experienced in building scalable web applications.",
            account: {
                name: "Github",
                link: "https://github.com/yourusername", 
                icon: "github-icon-link" 
            }
        },
        {
            title: "Freelancer",
            photo: "link_to_freelancer_image", 
            description: "Freelance web and mobile app development.",
            account: {
                name: "Discord",
                link: "https://discord.com/users/yourid", 
                icon: "discord-icon-link"
            }
        },
        {
            title: "Graphic Designer",
            photo: "link_to_graphic_designer_image",
            description: "Passionate about creating visually appealing designs.",
            account: {
                name: "Youtube",
                link: "https://youtube.com/channel/yourchannel", 
                icon: "youtube-icon-link" 
            }
        }
    ];
    return (
        <section className="main-section">
            {titleObjects.map((item, index) => (
                <Template key={index} item={item} index={index}/>
            ))}
        </section>
    );
}