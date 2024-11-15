import Headline from "./heroComponents/headline";
import MyInfo from "./heroComponents/myInfo";
import MyPhoto from "./heroComponents/myPhoto";
import "./hero.css"

 export default function Hero() {
    return (
        <div className="hero">
            <Headline />
            <div>
                <MyInfo />
                <MyPhoto />
            </div>
        </div>
    )
 }