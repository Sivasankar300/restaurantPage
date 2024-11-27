function loadAboutpage(){
    const content = document.querySelector("#content");

    const contactHeading = document.createElement("div");
    contactHeading.textContent = "Contact";
    contactHeading.classList.add("aboutpage","heading");
    content.appendChild(contactHeading);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("aboutpage","heading");
    content.appendChild(contactInfo);

    const phoneNumber = document.createElement("div");
    phoneNumber.textContent = "xxx-xxx-xxx";
    phoneNumber.classList.add("aboutpage","subheading");
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement("div");
    email.textContent = "Sample@imagineryMailService.com";
    email.classList.add("subheading","aboutpage")
    contactInfo.appendChild(email)
}

export {loadAboutpage}