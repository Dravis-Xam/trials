import Arrow from "./icons/arrow"
import "./navigation.css"

function Navigation() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#" className="homelink">Home</a></li>
                <li><a href="#" className="aboutlink">About Me</a></li>
                <li><a href="#" className="serviceslink">Services</a></li>
            </ul>
            <button>Contact me <Arrow /></button>
        </div>
    )
}

export default Navigation