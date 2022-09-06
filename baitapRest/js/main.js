let pheptinh = (...numberoepra) => {
    let tong = 0;
    let dtb = 0;
    let conut = 0;
    numberoepra.map((number) => { 
        tong += number;
        conut++;
        dtb = tong/conut;
     })
     return dtb.toFixed(2);
}
let total = () => {
    let toan = Number(document.getElementById("inpToan").value);
    let ly = Number(document.getElementById("inpLy").value);
    let hoa = Number(document.getElementById("inpHoa").value);
    let dtb = pheptinh(toan, ly, hoa);
    document.getElementById("tbKhoi1").innerHTML = dtb;
}
document.getElementById("btnKhoi1").onclick =total;
let total2 = () => {
    let van = Number(document.getElementById("inpVan").value);
    let su = Number(document.getElementById("inpSu").value);
    let dia = Number(document.getElementById("inpDia").value);
    let english = Number(document.getElementById("inpEnglish").value);
    let dtb = pheptinh(van, su, dia, english);
    document.getElementById("tbKhoi2").innerHTML = dtb;
}
document.getElementById("btnKhoi2").onclick = total2;
