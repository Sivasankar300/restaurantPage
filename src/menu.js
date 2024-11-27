function loadMenupage(){
    const content = document.querySelector("#content");

    const heading = document.createElement("div");
    heading.textContent = "Menus";
    heading.classList.add("heading","menuPage");
    content.appendChild(heading);

    const appetizer = document.createElement("div");
    appetizer.textContent = "Appetizers";
    appetizer.classList.add("subHeading","menuPage");
    content.appendChild(appetizer);

    const appetizerItem1 = document.createElement("div");
    appetizerItem1.textContent = "Samosa";
    appetizerItem1.classList.add("item","menuPage");
    content.appendChild(appetizerItem1);

    const appetizerItem1Desc = document.createElement("div");
    appetizerItem1Desc.textContent = "Fried pastry stuffed with potato savory filling.";
    appetizerItem1Desc.classList.add("itemDesc","menuPage");
    content.appendChild(appetizerItem1Desc);

    const appetizerItem2 = document.createElement("div");
    appetizerItem2.textContent = "BhelPuri";
    appetizerItem2.classList.add("item","menuPage");
    content.appendChild(appetizerItem2);

    const appetizerItem2Desc = document.createElement("div");
    appetizerItem2Desc.textContent = "Puffed rice mixed with veggies, tamarind and mint sauce.";
    appetizerItem2Desc.classList.add("itemDesc","menuPage");
    content.appendChild(appetizerItem2Desc);

    const southIndian = document.createElement("div");
    southIndian.textContent = "South Indian";
    southIndian.classList.add("subHeading","menuPage");
    content.appendChild(southIndian);

    const southIndianItem1 = document.createElement("div");
    southIndianItem1.textContent = "Ghee Pongal";
    southIndianItem1.classList.add("item","menuPage");
    content.appendChild(southIndianItem1);

    const southIndianItem1Desc = document.createElement("div");
    southIndianItem1Desc.textContent = "Rice & lentil porridge, tempered with ghee & spices";
    southIndianItem1Desc.classList.add("itemDesc","menuPage");
    content.appendChild(southIndianItem1Desc);

    const southIndianItem2 = document.createElement("div");
    southIndianItem2.textContent = "Parotta Kurma";
    southIndianItem2.classList.add("item","menuPage");
    content.appendChild(southIndianItem2);

    const southIndianItem2Desc = document.createElement("div");
    southIndianItem2Desc.textContent = "Layered bread served with mixed veggie curry";
    southIndianItem2Desc.classList.add("itemDesc","menuPage");
    content.appendChild(southIndianItem2Desc)

    const riceSpecial = document.createElement("div");
    riceSpecial.textContent = "Rice Special";
    riceSpecial.classList.add("subHeading","menuPage");
    content.appendChild(riceSpecial);

    const riceSpecialItem1 = document.createElement("div");
    riceSpecialItem1.textContent = "Dum Biriyani";
    riceSpecialItem1.classList.add("item","menuPage");
    content.appendChild(riceSpecialItem1);

    const riceSpecialItem1Desc = document.createElement("div");
    riceSpecialItem1Desc.textContent = "Basmati rice dum cooked with spices & veggies";
    riceSpecialItem1Desc.classList.add("itemDesc","menuPage");
    content.appendChild(riceSpecialItem1Desc);

    const riceSpecialItem2 = document.createElement("div");
    riceSpecialItem2.textContent = "Bangalore Bisibelebath";
    riceSpecialItem2.classList.add("item","menuPage");
    content.appendChild(riceSpecialItem2);

    const riceSpecialItem2Desc = document.createElement("div");
    riceSpecialItem2Desc.textContent = "Rice & lentils cooked with veggies & custom spices";
    riceSpecialItem2Desc.classList.add("itemDesc","menuPage");
    content.appendChild(riceSpecialItem2Desc);

    

    



}

export {loadMenupage}