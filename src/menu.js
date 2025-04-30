

export const loadMenu = function(){
   

    const bigContainer = document.getElementById("bigContainer");
    bigContainer.innerHTML = "";

     //load menu
     //ideally want to handle scope better with element names in the css - maybe import multiple
     //css files to multiple ES6 modules later on 
     const container = document.createElement("div");
     bigContainer.appendChild(container); 

     //hehe clean code 
     const menu = {
        "Chicken Teriyaki": 10.5,
        "Beef Udon": 12.0,
        "Salmon Roll": 8.75
      };
      
      for(const item in menu){
        const p = document.createElement("p");
        p.textContent = `${item} - ${menu[item]}`;
        container.appendChild(p);
      }


}