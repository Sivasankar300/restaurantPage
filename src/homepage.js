function loadHomepage(){
    

    const content = document.querySelector("#content");

    /* Headline, Image, Body-text */

    //Headline
    const heading = document.createElement("div");
    heading.textContent = "Headline";
    heading.classList.add("heading","homepage");
    content.appendChild(heading);

    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("homepage");
    content.appendChild(image);

    const bodyText = document.createElement("div");
    bodyText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Facere placeat nesciunt voluptas facilis excepturi voluptatem at modi sit, recusandae corporis. Porro, odio voluptatem corporis nemo libero debitis voluptatibus.";
    bodyText.classList.add("bodyText","homepage");
    content.appendChild(bodyText);

}
import imageSrc from "./asset/homepageImage.png";
export {loadHomepage}