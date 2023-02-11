const techsContainer = document.createElement("div");
techsContainer.id = "techContainer";
const content = document.querySelector("#content")

content.appendChild(techsContainer)
const logosPaths = ["images/html-logo.png", "images/css-logo.png", "images/javaScript-logo.png", "images/react-logo.png", "images/rtl-logo.png", "images/redux-logo.png"]

const techNames = ["html", "css", "javaScript", "react", "rtl", "redux"]

const createTechCards = () => {
  for (let index = 0; index < logosPaths.length; index += 1) {
    const techCard = document.createElement("div");
    techCard.className = "techCard";

    const techName = document.createElement("p");
    techName.innerText = techNames[index];
    techName.className = "techNames"

    const techLogo = document.createElement("img");
    techLogo.alt = techNames[index];
    techLogo.src = logosPaths[index];
    techLogo.className = "logos"

    techCard.appendChild(techName);
    techCard.appendChild(techLogo);
    techsContainer.appendChild(techCard);
  }
}

createTechCards();

const trace = document.createElement("div");
trace.id = "trace";
content.appendChild(trace);

const socialMediaContainer = document.createElement("div");
socialMediaContainer.id = "socialMediaContainer"
content.appendChild(socialMediaContainer);

const instagram = document.createElement("img");
instagram.src = "images/instagram-logo.png";
instagram.className = "social-medias"
socialMediaContainer.appendChild(instagram);

const linkedIn = document.createElement("img");
linkedIn.src = "images/linked-in-logo.png";
linkedIn.className = "social-medias"
socialMediaContainer.appendChild(linkedIn);