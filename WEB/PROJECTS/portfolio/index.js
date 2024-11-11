const portfolioRoot = document.getElementById("portfolioRoot"),
titleNames = ["Freelancer", "Software Developer"],
whoamiElem = document.getElementById("whoami"),
activeMsgme = document.querySelector(".messageMe"),
addBlogElem = document.getElementById("addNewBlog"),
newBlogBtn = document.getElementById("submitNewBlog"),
blogForm = document.getElementById("NewBlogEntry"),
info = {
    type: "",
    duration: 0,
    details: {
        name: "",
        age: "",
        titles: [],
        certifications: [],
        personalDetails: "",
        achievements: [],
        showGetMessage: true,
    } 
}

portfolioRoot.addEventListener("DOMContentLoaded", pageloader() && alert("Error 400! Could find content for you."));

document.body.addEventListener("DOMContentLoaded", ()=> {
    setInterval(handler(), 6000)
})

activeMsgme.addEventListener("onclick", ()=>{
    if(activeMsgme.classList.contains("active")){
        activeMsgme.classList.remove("active");
    }
    activeMsgme.classList.add("active");
});

addBlogElem.addEventListener("click", () => {
    if(blogForm.style.visibility === "hidden") {
        blogForm.style.visibility = "visible";
    } else {
        blogForm.style.visibility = "hidden";
    }
});

newBlogBtn.addEventListener("click", () => {
    const name = document.getElementById("#"),
          age = document.getElementById("#"), 
          titles = document.getElementById("#"), certifications = document.getElementById("#"), personalDetails = document.getElementById("#"), achievements = document.getElementById("#"), showGetMessage = document.getElementById("#");
    
    const type = document.getElementById("#");
    const duration = document.getElementById("#");
});

function pageloader(){
    
    const body = document.body;

    //to be continued...

    return body;
}

function handler(){
    for(let u = 0; u < titleNames.length(); u++) {
        setTimeout(()=> {
            whoamiElem.textContent = titleNames[u];
        }, (3000 * u ));
        setTimeout(()=> {
            whoamiElem.textContent = titleNames[u++];
        }, (3000 * (u++)));
    }
}

function createBlogObj(ty, du, n, age, ti, certs, pers, ach, shw) {
    return {
        type: ty,
        duration: du,
        details: {
            name: n,
            age: age,
            titles: ti,
            certifications: certs,
            personalDetails: pers,
            achievements: ach,
            showGetMessage: shw,
        }
    } || info;
};

function setPeriodOFShow(info) {
    setTimeout(removeBlog(info), info.duration * 24 * 3600 * 1000)
}

function generateUniqueCombination() {
    // Get the current timestamp
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    // Combine the timestamp and random number, then convert to a string
    const uniqueStr = `${timestamp}-${randomNum}`;
    // Optionally, hash the result to make the string more unique
    const hash = btoa(uniqueStr);  // Base64 encoding for uniqueness
    return hash;
}

function createBlog(info) {
    const BlogId = generateUniqueCombination();
    document.title = info.details.name + ": My Portfolio";
    setPeriodOFShow(info.duration);
    document.getElementById("username").textContent = info.details.name;
    document.getElementById("age").textContent = info.details.age;
    document.getElementById("titles").textContent = info.details.titles;
    document.getElementById("certifications").textContent = info.details.certifications;
    document.getElementById("personalDetails").textContent = info.details.personalDetails;
    document.getElementById("achievements").textContent = info.details.achievements;

};

function removeBlog(info, blogId) {

}