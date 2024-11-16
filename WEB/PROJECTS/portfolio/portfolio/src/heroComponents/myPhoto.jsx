import "./myPhoto.css"
import myPhoto from "./photo/Dravis.jpg"

function MyPhoto() {
    return <img alt="MyPhoto" src={myPhoto} className="myPhoto"/>
}

export default MyPhoto;