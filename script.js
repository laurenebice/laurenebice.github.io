//assign page sections
const home = document.querySelector("#home");
const features = document.querySelector("#features");
const work = document.querySelector("#work");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

//assign links
const homeLink = document.querySelector("#homeLink");
const featuresLink = document.querySelector("#featuresLink");
const workLink = document.querySelector("#workLink");
const aboutLink = document.querySelector("#aboutLink");
const contactLink = document.querySelector("#contactLink");
const navLinks = document.querySelector('.navLink');

//default, set home link to active
homeLink.classList.add("active");

//check page on scroll, change active class
function activeNav() {

    if ((window.scrollY + 100) < home.offsetHeight + home.offsetTop && (window.scrollY + 100) >= home.offsetTop) {
        homeLink.classList.add("active");
        featuresLink.classList.remove("active");
        workLink.classList.remove("active");
        aboutLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
    else if ((window.scrollY + 100) < features.offsetHeight + features.offsetTop && (window.scrollY + 100) > features.offsetTop) {
        featuresLink.classList.add("active");
        homeLink.classList.remove("active");
        workLink.classList.remove("active");
        aboutLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
    else if ((window.scrollY + 100) < work.offsetHeight + work.offsetTop && (window.scrollY + 100) > work.offsetTop) {
        workLink.classList.add("active");
        homeLink.classList.remove("active");
        featuresLink.classList.remove("active");
        aboutLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
    else if ((window.scrollY + 100) < about.offsetHeight + about.offsetTop && (window.scrollY + 100) > about.offsetTop) {
        aboutLink.classList.add("active");
        homeLink.classList.remove("active");
        featuresLink.classList.remove("active");
        workLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
    else if ((window.scrollY + 100) <= contact.offsetHeight + contact.offsetTop && (window.scrollY + 100) >= contact.offsetTop) {
        contactLink.classList.add("active");
        homeLink.classList.remove("active");
        featuresLink.classList.remove("active");
        workLink.classList.remove("active");
        aboutLink.classList.remove("active");
    }
}

//debounce function, checks scroll every 10s
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//assign slide elements
const slideElements = document.querySelectorAll(".slideInElement");
const workTitle = document.querySelector(".workTitle");

//slide in and out titles and feature boxes on scroll
function checkSlide(e) {
    slideElements.forEach(slideElement => {
        let enter;
        let headingBase;
        let onScreen;
        let notScrolledPast;
        if (window.scrollY >= (work.offsetTop - 400) && window.scrollY <= work.offsetTop + work.offsetHeight) {
            enter = window.scrollY > (work.offsetTop - 400);
            headingBase = work.offsetTop + work.offsetHeight;
            onScreen = window.scrollY >= (work.offsetTop - 400) && window.scrollY <= work.offsetTop + work.offsetHeight;
            notScrolledPast = window.scrollY >= enter && window.scrollY <= headingBase;
            if (notScrolledPast && onScreen) {
                workTitle.classList.add("slideElementIn");
            } else {
                workTitle.classList.remove("slideElementIn");
            }
        } else {
            enter =
                (window.scrollY + window.innerHeight - slideElement.offsetHeight) - 150;
            headingBase = (slideElement.offsetTop + slideElement.offsetHeight) + 500;
            onScreen = enter >= slideElement.offsetTop;
            notScrolledPast = window.scrollY < headingBase;

            if (onScreen && notScrolledPast) {
                slideElement.classList.add("slideElementIn");
            } else {
                slideElement.classList.remove("slideElementIn");
            }
        }
    })
}

//functions to run on scroll
window.addEventListener("scroll", debounce(checkSlide));
window.addEventListener("scroll", debounce(activeNav));
window.addEventListener('load', activeNav);

//content for work section
const webDevelopment = {
    section: "webDevelopment",
    image: ["images/webDevelopment/billTracker.png", "images/webDevelopment/christmasCountdown.png", "images/webDevelopment/salesTax.png"],
    name: ["Bill Tracker", "Christmas Countdown", "Sales Tax Calculator"],
    description: ["Work in progress. Takes in a name for the bill, the amount, and due date. More functionality to be added in the future. | JavaScript, HTML, CSS", "Counts down the days until christmas. | JavaScript, HTML, CSS", "Calulates the sales tax of your purchase. If you\'re on a budget and only have so much to spend, it will give you a more realistic idea of how much to spend. | JavaScript, HTML, CSS"],
    link: ["https://codepen.io/Laurenebice/full/JemzdG", "https://codepen.io/Laurenebice/full/JeNKMB", "https://codepen.io/Laurenebice/full/qQxLBb"]
}

const webDesign = {
  section: "webDesign",
  image: ["images/webDesign/busyBees.png", "/images/webDesign/dunrite.png"],
  name: ["Busy Bees Bakery", "DunRite Remodeling & Roofing"],
  description: [
    'Six page web design mockup for my fictional Busy Bee"s Bakery. Download below to view on Adobe XD | Adobe XD',
    "Mockup for the future website of DunRite Remodeling & Roofing. The website will be developed as a custom WordPress template. Download below to view on Adobe XD | Adobe XD"
  ],
  link: ["mockup-BusyBees.xd","mockup-DunRite.xd"]
};

const branding = {
    section: "branding",
    image: ["images/branding/allenRosalesBranding.png", "images/branding/busyBeesBranding.png", "images/branding/dunriteBranding.png", "images/branding/personalBranding.png"],
    name: ["Allen Rosales Law Firm", "Busy Bees Bakery", "DunRite Remodeling & Roofing", "Personal Brand"],
    description: ["Branding for the Allen Rosales Law Firm. Logo, business card, website banner, and photo.", "Branding for a fictional company I\'ve create, Busy Bees Bakery.Logo, location examples, and product examples.", "Branding for Dunrite Roofing & Remodeling.Logo Design and photo ad, created using Photoshop.", "Personal branding.Personal brand merchandise"]
}

const adobe = {
    section: "adobe",
    image: ["images/adobe/goldfish.png","images/adobe/skyWhale.png","images/adobe/MountainBear.png","images/adobe/fawkes.jpg", "images/adobe/auroraBearialus.jpg", "images/adobe/doubleExposure.jpg", "images/adobe/doubleExposure-2.jpg", "images/adobe/doubleExposure-3.jpg", "images/adobe/doubleExposure-4.jpg", "images/adobe/flying.jpg", "images/adobe/geometricDoberman-01.jpg", "images/adobe/geometricDoberman-black.jpg", "images/adobe/ladyIvy.jpg", "images/adobe/monkOverlay.jpg", "images/adobe/mossChameleon.jpg", "images/adobe/motherNature.jpg", "images/adobe/rainbowChameleon.jpg", "images/adobe/rickAndMortyShirt.jpg", "images/adobe/succulentTortoise.jpg", "images/adobe/doubleExposureTree.jpg", "images/adobe/sunGoddess.jpg", "images/adobe/chatra.jpg", "images/adobe/wave.jpg", "images/adobe/wellBehaved.jpg"],
    name: ["Photo Manipulation","Photo Manipulation","Double Exposure","Fawkes", "Aurora Bearialus", "Double Exposure", "Double Exposure", "Double Exposure", "Double Exposure", "Flying", "Geometric Doberman", "Geometric Doberman Frame", "Lady Ivy", "Meditation", "Camoflauge", "Mother Nature", "Rainbow Chameleon", "Design Competition Entry", "Succulent Tortoise", "Double Exposure",  "Sun", "Chatra", "Wave", "Photo Quote"],
    description: ["Goldfish swimming through clouds | Photoshop","Whale in the clouds | Photoshop","Bear and mountain double exposure | Photoshop","Guy Fawkes mask made entirely of V\"s | Photoshop", "Polar Bears overlayed with an aurora borealis | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Created entirely with the pen tool | Illustrator", "Created entirely with the pen tool | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Photo manipulation | Photoshop", "Photo manipulation | Photoshop", "Photo manipulation | Photoshop", "Entry for Rick and Morty T - Shirt design contest | Illustrator", "Photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Double exposure photo manipulation | Photoshop", "Text and photo manipulation"]
}

const photography = {
    section: "photography",
    image: ["images/photography/DSC_0253.png","images/photography/DSC_0005.png","images/photography/DSC_0044.png","images/photography/DSC_0068.png","images/photography/DSC_0090.png","images/photography/DSC_0132.png","images/photography/DSC_0133.png","images/photography/DSC_0143.png","images/photography/DSC_0207.png","images/photography/DSC_0228.png","images/photography/DSC_0230.png","images/photography/DSC_0242.png","images/photography/DSC_0245.png","images/photography/DSC_0258.png","images/photography/DSC_0274.png","images/photography/DSC_0325.png","images/photography/architecture.png","images/photography/bikeRack.png","images/photography/cricket.png","images/photography/cricket2.png","images/photography/pipes.png","images/photography/railroad.png","images/photography/utaStatue.png","images/photography/bottles.jpg", "images/photography/bridge.jpg", "images/photography/hotAirBalloon.jpg", "images/photography/nature1.jpg", "images/photography/nature2.jpg", "images/photography/nature3.jpg", "images/photography/nature4.jpg", "images/photography/nature5.jpg", "images/photography/nature6.jpg", "images/photography/nature7.jpg", "images/photography/nature8.jpg", "images/photography/nature9.jpg", "images/photography/nature10.jpg", "images/photography/nature11.jpg", "images/photography/nature12.jpg", "images/photography/nature13.jpg", "images/photography/nature14.jpg", "images/photography/nature15.jpg", "images/photography/nature16.jpg", "images/photography/nature17.jpg", "images/photography/nature18.jpg", "images/photography/nature19.jpg", "images/photography/nature20.jpg", "images/photography/nature21.jpg", "images/photography/nature22.jpg", "images/photography/nature23.jpg", "images/photography/nature24.jpg", "images/photography/nature25.jpg", "images/photography/nature26.jpg", "images/photography/nature27.jpg", "images/photography/nature28.jpg", "images/photography/nature29.jpg", "images/photography/nature30.jpg", "images/photography/peppersInBasket.jpg", "images/photography/potbellyPig.jpg", "images/photography/santaFe.jpg", "images/photography/sculpture.jpg", "images/photography/seaHorse.jpg", "images/photography/stairs.jpg"],
    name: ["Photography | Mountain Scenery","Photograph | Plant in Mountains","Photograph | Mountain Scenery","Photograph | Plant in Mountains","Photograph | Eagle Flying Over Mountain Side","Photograph | Moss & Sticks","Photograph | Mountain River","Photograph | Mountain Scenery","Photograph | Mountain Scenery","Photograph | Rock Formation","Photograph | Rock Formation","Photograph | Mountain Top","Photograph | Mountain Scenery","Photograph | Rock Formation","Photograph | Pines in the Mountains","Photograph | Rock Formation","Photograph | Architecture","Photograph | Bike Rack","Photograph | Puppy","Photograph | Puppy","Photograph | Pipes","Photograph | Railroad","Photograph | Horse Statue","Photograph | Bottles", "Photograph | Bridge", "Photograph | Hot Air Balloon", "Photograph | Plant", "Photograph | Grass", "Photograph | Grass", "Photograph | Plant", "Photograph | Cedar Tree", "Photograph | Plant", "Photograph | Aspen Tree", "Photograph | Snow Covered Fence Post", "Photograph | Scenic Outlook", "Photograph | Bee Flying by Flower", "Photograph | Plant", "Photograph | Aspen Trees", "Photograph | Cactus", "Photograph | Cactus and scenery", "Photograph | Trail through Aspen Grove", "Photograph | Overview of canyon", "Photograph | Butterfly on Thistle Flower", "Photograph | Scenery", "Photograph | Hot srping", "Photograph | Hot spring", "Photograph | Plant", "Photograph | Bridge", "Photograph | Bee on flower", "Photograph | Bee on flower", "Photograph | Plant", "Photograph | Plant", "Photograph | Stacked logs", "Photograph | Grass and stream", "Photograph | Grass", "Photograph | Wisteria", "Photograph | Peppers in basket", "Photograph | Potbelly pig", "Photograph | Building in Santa Fe", "Photograph | Sculptutre", "Photograph | Sea Horse", "Photograph | Stairs"],
    description: ["Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","Digital Photograph","32mm Black and White Photograph", "32mm Black and White Photograph", "32mm Black and White Photograph", "32mm Black and White Photograph", "32mm Black and White Photograph", "32mm Black and White Photograph", "32mm Black and White Photograph","Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph", "Digital photograph",]
}

const other = {
    section: "other",
    image: ["images/otherWork/reverb.jpg", "images/otherWork/cosmosOnTheHalfShell.jpg", "images/otherWork/pastelPortrait.jpg", "images/otherWork/3dSculpture.png","images/otherWork/watching.png","images/otherWork/stillLife.png"],
    name: ["Reverb", "Cosmos on the Half Shell", "Pastel Portrait", "Geometric Sculpture", "Watching", "Still Life"],
    description: ["Reverb is an oil painting, meant to represent the depth and feeling of music. Sculpting medium was used for the rings of sound to show depth", "Cosmos on the Half Shell is an oil painting of a sea turtle set against the cosmos with an ancient civilization upon its back", "This portrait was done with chalk pastels, a young girl in a colorful headscarf.", "3D design project.", "Mixed media drawing.", "Oil still life painting of two mannequins."]
}

//assign projects div
const projects = document.querySelector(".project");


//assign project buttons
const devButton = document.querySelector("#webDevelopment");
const designButton = document.querySelector("#webDesign");
const brandingButton = document.querySelector("#Branding");
const adobeButton = document.querySelector("#Adobe");
const photoButton = document.querySelector("#Photography");
const otherButton = document.querySelector("#Other");


//load content
devButton.addEventListener("click", () => loadProject(webDevelopment));
designButton.addEventListener("click", () => loadProject(webDesign));
brandingButton.addEventListener("click", () => loadProject(branding));
adobeButton.addEventListener("click", () => loadProject(adobe));
photoButton.addEventListener("click", () => loadProject(photography));
otherButton.addEventListener("click", () => loadProject(other));

//set active button

devButton.addEventListener("click", () => setActiveButton(devButton));
designButton.addEventListener("click", () => setActiveButton(designButton));
brandingButton.addEventListener("click", () => setActiveButton(brandingButton));
adobeButton.addEventListener("click", () => setActiveButton(adobeButton));
photoButton.addEventListener("click", () => setActiveButton(photoButton));
otherButton.addEventListener("click", () => setActiveButton(otherButton));

let activeProject = devButton;

function setActiveButton(button) {
    activeProject.classList.remove("activeProject");
    activeProject = button;
    activeProject.classList.add("activeProject");
}

setActiveButton(devButton);//set default

//assign current selected projects
let displayedProjects = [...document.querySelectorAll(".projectContainer")];

//load selected projects on push of project button
function loadProject(project) {
    projects.innerHTML = "";
    project.image.map(function (val, index) {
        const projectContainer = document.createElement("div");
        projectContainer.setAttribute("class", `projectContainer ${project.section}`);
        projects.appendChild(projectContainer);
        projectContainer.innerHTML = `<img src = "${val}" id = "${project.section}${index}" alt = "${project.name[index]}" onclick = "expandProject(${project.section}, ${index})" data-index = ${index}>`;
    });
}

//load web development project by default
loadProject(webDevelopment);

function removeListener(){

}


//exit fullscreen view
function exitProject() {
    fullProjectView.innerHTML = "";
    fullProjectView.style.display = "none";
}

let projectObject;
let currentIndex;

//assign full-project div
const fullProjectView = document.querySelector(".fullProject");

//initialize minimizeActive
let minimizeActive;

let changeImage;

//expand project to fullsize view
function expandProject(section, index) {
    projectObject = eval(section);


    currentIndex = index;

    minimizeActive = false;

    fullProjectView.style.display = "block";

    let overlay = document.createElement("div");
    overlay.setAttribute("class", "screen-overlay");
    fullProjectView.appendChild(overlay);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");
    overlay.appendChild(imageContainer);
    imageContainer.innerHTML = `<img src = "${projectObject.image[currentIndex]}" class = "full-size" alt = "${projectObject.name[currentIndex]}">`;

    let fullsizeImage = document.querySelector('.full-size');
    if (fullsizeImage.width < fullsizeImage.height) {
        fullsizeImage.style.Width = 'auto';
        fullsizeImage.style.maxHeight = '90%';
        fullsizeImage.style.top = '60%';
    }

    let projectDescription;
    let minimize = document.createElement("div");
    minimize.classList.add('minimize');
    if (projectObject.hasOwnProperty("description")) {
        projectDescription = document.createElement("div");
        projectDescription.classList.add("description");
        projectDescription.innerHTML = `<div class = "descriptionText"><h3>${projectObject.name[currentIndex]}</h3><p>${projectObject.description[currentIndex]}</p></div>`;
        projectDescription.appendChild(minimize);
    }


    let projectLink;
    if (projectObject.hasOwnProperty("link")) {
        projectLink = document.createElement("A");
        projectLink.href = `${projectObject.link[currentIndex]}`;
        projectLink.target = "_blank";
        projectLink.classList.add('viewLink');
    }

    let viewButton;
    if (projectObject.hasOwnProperty("description")) {
        overlay.appendChild(projectDescription);
        if (projectObject.hasOwnProperty("link")) {
            viewButton = document.createElement("div");
            viewButton.classList.add("view");
            projectLink.innerHTML = "View";
            projectDescription.appendChild(viewButton);
            viewButton.appendChild(projectLink);
        }
    }

    let exit = document.createElement("div");
    exit.classList.add("exit");
    exit.innerHTML = "X";
    overlay.appendChild(exit);
    exit.addEventListener("click", exitProject);

    let previous = document.createElement("div");
    previous.classList.add("previousImage");
    previous.innerHTML = "↞";
    overlay.appendChild(previous);

    let next = document.createElement("div");
    next.classList.add("nextImage");
    next.innerHTML = "↠";
    overlay.appendChild(next);


    //minimize project description
    minimize.addEventListener("click", function () {
        if (!minimizeActive) {
            minimizeActive = true;
            projectDescription.classList.add("minimized");
            document.querySelector(".descriptionText").style.display = "none";
            if(projectObject.hasOwnProperty("link")){
            projectLink.style.display = "none";
            viewButton.style.display = "none";
            document.querySelector(".description h3,p,.view").style.animation
            }
        } else {
            minimizeActive = false;
            projectDescription.classList.remove("minimized");
            document.querySelector(".descriptionText").style.display = "block";
            if (projectObject.hasOwnProperty("link")) {
            projectLink.style.display = "block";
            viewButton.style.display = "block";
            }
        }
    })

    changeImage = function(direction) {
            if (direction === 'next' && currentIndex + 1 < projectObject.image.length) {
                currentIndex = currentIndex + 1;
            } else if (direction === 'previous' && currentIndex -1 >= 0) {
                currentIndex = currentIndex - 1;
            }
            imageContainer.innerHTML = `<img src = "${projectObject.image[currentIndex]}" class = "full-size" alt = "${projectObject.name[currentIndex]}">`;
            if (projectObject.hasOwnProperty("description")) {
                projectDescription.innerHTML = `<div class = "descriptionText"><h3>${projectObject.name[currentIndex]}</h3><p>${projectObject.description[currentIndex]}</p></div>`;
                projectDescription.appendChild(minimize);

                if (projectObject.hasOwnProperty("link")) {
                    viewButton = document.createElement("div");
                    viewButton.classList.add("view");
                    projectLink.innerHTML = "View";
                    projectDescription.appendChild(viewButton);
                    viewButton.appendChild(projectLink);
                }

                if (minimizeActive) {
                    document.querySelector(".descriptionText").style.display =
                        "none";
                    viewButton.style.display = "none";
                    projectLink.style.display = "none";
                }
            }
    }
    next.addEventListener('click', function(){
        changeImage('next')});
    previous.addEventListener('click', function(){
        changeImage('previous')});

}
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        changeImage('next');
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        changeImage('previous');
    }
})

//change about content
const aboutContent = document.querySelectorAll(".aboutContent");
const aboutButtons = document.querySelectorAll(".aboutButton")
const bioButton = document.querySelector("#bio");
const skillsButton = document.querySelector("#skills");
const profButton = document.querySelector("#profiles");
const bio = document.querySelector(".bio");
const skills = document.querySelector(".skills");
const profiles = document.querySelector(".profiles")

let activeSection;
let activeButton;

function change() {
    aboutContent.forEach(content => content.style.display = "none");
    aboutButtons.forEach(button => button.style.color = "white");
    aboutButtons.forEach(button => button.style.border = "2px solid var(--green)");
    aboutButtons.forEach(button => button.style.fontWeight = "normal");
    activeSection.style.display = "block";
    activeButton.style.color = "var(--purple)";
    activeButton.style.border = "2px solid white";
    activeButton.style.fontWeight = "bolder";
};

bioButton.addEventListener("click", function () {
    activeSection = bio;
    activeButton = bioButton;
    change();
});

skillsButton.addEventListener("click", function () {
    activeSection = skills;
    activeButton = skillsButton;
    change();
});

profButton.addEventListener("click", function () {
    activeSection = profiles;
    activeButton = profButton;
    change();
});

//mobile menu
let mobileMenuActive = false;
const logo = document.querySelector(".logo");
let mobileMenu = document.querySelector('.mobileMenu');
mobileMenu.addEventListener('click', () => {
    if (!mobileMenuActive) {
        mobileMenuActive = true;
        logo.classList.add("activeMobileNav");
        document.querySelector('nav ul').style.transform = 'translateX(0)';
    } else {
        mobileMenuActive = false;
        logo.classList.remove("activeMobileNav");
        document.querySelector('nav ul').style.transform = 'translateX(-800px)';
    }
});