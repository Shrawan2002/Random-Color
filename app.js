let btn=document.querySelector("button");
console.log(btn);
let h3=document.querySelector("h3");
console.log(h3);
let div=document.querySelector(".color");
btn.addEventListener("click",function(){
    console.log("buutton was click");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    div.style.backgroundColor=randomColor;
    console.log("color is updated");

}
)


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

// getRandomColor();