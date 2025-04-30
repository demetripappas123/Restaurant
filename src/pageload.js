import myImage from "../img.jfif";


export const pageLoad = function(){
    //load header
    const header = document.createElement("header");
    header.setAttribute("id", 'homeHeader');
    document.body.appendChild(header);

    //load nav
    const nav = document.createElement("nav");
    nav.setAttribute("id", "homeNav");
    header.appendChild(nav);

    //load buttons
    let arr = ["Home", "Menu", "Contact"];
    for(let i = 0; i < 3; i++){
        const button = document.createElement("button");
        button.setAttribute("id", arr[i]);
        button.textContent = arr[i];
        nav.appendChild(button);
    }
    
    const bigContainer = document.createElement("div");
    document.body.appendChild(bigContainer);
    bigContainer.setAttribute("id", "bigContainer");
    
    //load background image 
    const image = document.createElement("img");
    image.setAttribute("src", myImage);
    image.setAttribute("id", "backgroundImage");
    bigContainer.appendChild(image);
    
    //load heading 
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    bigContainer.appendChild(container);

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant";
    heading.setAttribute("id", "homeHeading");
    container.appendChild(heading);

    //load paragraph 
    const paragraph = document.createElement("p");
    paragraph.textContent = "We are a fantastic restaurant";
    paragraph.setAttribute("id","homeParagraph");
    container.appendChild(paragraph);


}

