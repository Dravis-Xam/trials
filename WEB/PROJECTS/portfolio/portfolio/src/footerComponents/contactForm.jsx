import React from "react";
import "./contactForm.css";
import send from "./icons/send.gif";

export default function ContactForm() {
    const iconstyle = {
        width: "30px",
        height: "30px"
    }
    return (
    <div className = "contactMe">
        <form action="#" method="post">
            <div class="inputs">
                <label htmlFor="guestEmail" className="floating-label">Email</label>
                <input type="email" name="email" id="guestEmail" />
            </div>
            <div className="inputs">
                <span className="placeholder">Message</span>
                <textarea name="message" id="guestMsg" rows = "4" cols = "50"></textarea>
            </div>
            <div className="sendButton">
                <span className="placeholder"><img style={iconstyle} src={send} alt="Send" /></span>
                <input type="submit" name="sendGuestMsg" id="sendGuestMsg" />
            </div>
        </form>
    </div>);
}
