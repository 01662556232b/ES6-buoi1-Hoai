const ListColor =
     ["pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"
];
let rendercolor = () => {
   let content = "";
   ListColor.map((color,index) => {
    if(index == 0){
        content += `
            <button class="color-button ${color} active" onclick="chanhouse('${color}')" ></button>
        `;
    }else{
        content += `
            <button class="color-button ${color}" onclick="chanhouse('${color}')" ></button>
        `;
    }
        


    })
    document.querySelector("#colorContainer").innerHTML = content;
}
rendercolor();

let chanhouse = (color) => {

    let btn = document.querySelectorAll(".color-button");
    for (let i = 0; i < btn.length; i++) {
       btn[i].classList.remove("active");
    }

    document.querySelector(`.${color}`).className = `color-button ${color} active`;
   
    document.getElementById("house").className = `house ${color}`;
        
   
    
}