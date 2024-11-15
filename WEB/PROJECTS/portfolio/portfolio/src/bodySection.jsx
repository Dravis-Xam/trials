export default function Main() {
    return (
        <div className="mainContent">
            <div className="components">
                <span className = "cName">Biography</span>
                <span className = "cIcon"></span>
            </div>
            <div className="components">
                <span className = "cName">Achievements</span>
                <span className = "cIcon"></span>
            </div>
            <div className="components">
                <span className = "cName">Certificates</span>
                <span className = "cIcon"></span>
            </div>
            <div className="components">
                <button id="addNewBlog">
                    <img src="#" alt="add" />
                </button>
                <form action="" method="post" id="NewBlogEntry">
                    <div className="typeNduration"></div>
                    <div className="name"></div>
                    <div className="age"></div>
                    <div className="titles"></div>
                    <div className="certifications"></div>
                    <div className="personalDetails"></div>
                    <div className="achievements"></div>
                    <div className="checkEmailBack"></div>
                    <button className="submit" id = "submitNewBlog">
                        Complete
                    </button>
                </form>
            </div>
        </div>
    )
}