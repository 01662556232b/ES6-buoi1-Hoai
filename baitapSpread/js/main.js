let jump = () => {
    let str = "Hover Me!"
    let content = "";
    let str2 = [...str];
    str2.map((hover) => { 
        content +=`
            <span>${hover}</span>
        `
    });
   document.querySelector(".heading").innerHTML = content;

}
jump()