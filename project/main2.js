let btn = document.querySelector('.btn')
console.log(btn.childNodes)


btn.onmouseover = () => {
    btn.style.position = "absolute";
    btn.style.left = Math.random()*100 + 'px'; 
    btn.style.top  = Math.random()*100 + 'px';
    btn.childNodes[1].innerText= 'red';
}

btn.onmouseout = () => {
    btn.childNodes[1].innerText= 'Hola';
}
