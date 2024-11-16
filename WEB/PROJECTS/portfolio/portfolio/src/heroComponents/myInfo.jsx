import JobTitles from "./jobtitles";
import "./myInfo.css"

function MyInfo() {
    return <div className="myInfoSctn">
        <h1>Hello</h1>
        <p className="myNameIntro">My name is {"Kennedy Ngovi Kamau" || me.getName()}</p>
        <p className="myJobsTile">I am a <JobTitles /></p>
    </div>
}

export default MyInfo; 