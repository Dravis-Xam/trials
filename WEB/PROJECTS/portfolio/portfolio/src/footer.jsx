export default function Footer() {
    return (
        <div className="footer">
            <div className = "socialMedia">
                <ul>
                    <li>
                        <a href="#">
                            <img src = "#" alt = "Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src = "#" alt = "Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src = "#" alt = "Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src = "#" alt = "Discord" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src = "#" alt = "Github" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className = "messageMe active">
                <form action="#" method="post">
                    <div>
                        <span className="placeholder active">Your Email: </span>
                        <input type="email" name="email" id="guestEmail" />
                    </div>
                    <div>
                        <span className="placeholder active">Your Message: </span>
                        <textarea name="message" id="guestMsg" rows = "4" cols = "50"></textarea>
                    </div>
                    <div>
                        <span className="placeholder active">Send </span>
                        <input type="submit" name="sendGuestMsg" id="sendGuestMsg" />
                    </div>
                </form>
            </div>
        </div>
    )
}