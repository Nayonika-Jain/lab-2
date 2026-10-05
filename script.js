//time- greeting changes depending on the time of day
const greeting = document.getElementById("greeting");
let hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good morning, welcome to my page!";
} else if (hour < 18) {
    greeting.innerHTML = "Good afternoon, welcome to my page!";
} else {
    greeting.innerHTML = "Good evening, welcome to my page!";
}

//click- change theme, Bom - local storage should rememeber it 
const button = document.getElementById("themebutton");
button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    } });

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}

//click- show or hide job details
const jobTitles = document.getElementsByClassName("jobtitle");

for (let i = 0; i < jobTitles.length; i++) {
    jobTitles[i].addEventListener("click", () => {
        let details = jobTitles[i].nextElementSibling;
        if (details.style.display == "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
}

//mouse- hover over the skills to change colour
const skills = document.getElementsByClassName("skill");

for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener("mouseover", () => {
        skills[i].style.color = "#8e44ad";
        skills[i].style.fontWeight = "bold";
    });
    skills[i].addEventListener("mouseout", () => {
        skills[i].style.color = "";
        skills[i].style.fontWeight = "normal";
    });
}