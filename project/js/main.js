let negro = document.querySelector(".btn-Ra-negro");
let circulo_negro = document.querySelector(".circulo");
let boton_negro = document.querySelector(".browser");
let name_product = document.querySelector("#name_product");

let verde = document.querySelector(".btn-Ra-verde");
let circulo_verde = document.querySelector(".circulo");
let boton_verde = document.querySelector(".browser");

let naranja = document.querySelector(".btn-Ra-naranja");
let circulo_naranja = document.querySelector(".circulo");
let boton_naranja = document.querySelector(".browser");

let gris = document.querySelector(".btn-Ra-gris");
let circulo_gris = document.querySelector(".circulo");
let boton_gris = document.querySelector(".browser");

negro.addEventListener('click', ()=>{
    producto.src="/images/producto_negro.png";
    circulo_negro.style.border = "40px solid #000000";
    boton_negro.style.background = "#000000";
    boton_negro.style.color = "#FFFFFF";
    negro.style.border = "1px solid #000000";
    verde.style.border = "1px solid transparent";
    naranja.style.border = "1px solid transparent";
    gris.style.border = "1px solid transparent";
    name_product.textContent= "Black Furniture";
    name_product.style.color = "#000000";
})


verde.addEventListener('click', ()=>{
    producto.src="/images/producto_verde.png";
    circulo_verde.style.border = "40px solid #5D5F37";
    boton_verde.style.background = "#5D5F37";
    boton_verde.style.color = "#FFFFFF";
    verde.style.border = "1px solid #000000";
    negro.style.border = "1px solid transparent";
    naranja.style.border = "1px solid transparent";
    gris.style.border = "1px solid transparent";
    name_product.textContent= "Green Furniture";
    name_product.style.color = "#5D5F37";
})


naranja.addEventListener('click', ()=>{
    producto.src="/images/producto_naranja.png";
    circulo_verde.style.border = "40px solid #FC8106";
    boton_verde.style.background = "#FC8106";
    boton_verde.style.color = "#000000";
    naranja.style.border = "1px solid #000000";
    negro.style.border = "1px solid transparent";
    verde.style.border = "1px solid transparent";
    gris.style.border = "1px solid transparent";
    name_product.textContent= "Orange Furniture";
    name_product.style.color = "#FC8106";
})


gris.addEventListener('click', ()=>{
    producto.src="/images/producto_gris.png";
    circulo_gris.style.border = "40px solid #C4B7A9";
    boton_gris.style.background = "#C4B7A9";
    boton_gris.style.color = "#000000";
    gris.style.border = "1px solid #000000";
    negro.style.border = "1px solid transparent";
    verde.style.border = "1px solid transparent";
    naranja.style.border = "1px solid transparent";
    name_product.textContent= "Gray Furniture";
    name_product.style.color = "#C4B7A9";
})


// negro.forEach(black => black.addEventListener("click", ()=>{
//     document.querySelector(".active")?.classList.remove("active");
//     black.classList.add("active");

// }))