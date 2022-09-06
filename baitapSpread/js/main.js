
let hoverspread = () => {
    let aterzoon = "Hover Me!"
    let content = "";
    let befonezoon = [...aterzoon];
    befonezoon.map((zoomplue) => { 
        content +=`
            <span>${zoomplue}</span>
        `
    });
   document.querySelector(".heading").innerHTML = content;

}
hoverspread()