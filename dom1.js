// let btn = document.getElementById("btn")
//         btn.addEventListener("dblclick",()=>{
//         // let btn = document.getElementById("btn")
//             document.body.style.backgroundColor='red'
//         })

// let color = document.body.style.backgroundColor()

// let color = function(){
//     let z = Math.floor(Math.random() * 500000) + 99999;
//     z = document.body.style.backgroundColor
//     return z
// }
// // console.log(color)
// color()
// let body = document.getElementById("bdy")
// let a = addEventListener("click",function(){
//     let x = Math.floor(Math.random()*100000)+75839
//     body.style.backgroundColor = a
//     console.log(a)
// })

let x = document.getElementById("bdy");
let y = document.getElementById("btn");
y.style.backgroundColor = "yellow";
y.style.color = "green";
let z = document.getElementById("button1");
let dbz = document.getElementById("button2");

y.addEventListener("mouseover", function () {
  let y = "#";
  y = y + (Math.floor(Math.random() * 500000) + 99999);
  x.style.backgroundColor = y;
});

z.addEventListener("click", function () {
  let z = "#";
  z = z + (Math.floor(Math.random() * 400000) + 99999);
  x.style.backgroundColor = z;
});

dbz.addEventListener("dblclick", function () {
  let diver = document.createElement("div");
  diver.style.height = "100px";
  diver.style.width = "100px";
  diver.style.border = "4px solid"
  diver.style.backgroundColor = "aqua";
  diver.style.margin = "50px"
  x.appendChild(diver);
  let del = document.createElement("span")
  del.innerHTML = "X"
  del.style.fontFamily = "tahoma"
  del.style.border = "1px solid"
  del.style.height = "5px"
  del.style.padding = "2px 4px"
  del.style.marginLeft= "81px"
//   del.style.marginBottom = "20px"
  del.style.cursor = "pointer"
  del.style.backgroundColor = "red"
  
  del.addEventListener("click", function(){
    
    diver.remove()
  })
  diver.appendChild(del)

  let dbz = "#";
  dbz = dbz + (Math.floor(Math.random() * 400000) + 99999);
  x.style.backgroundColor = dbz;
});



// let z = "ABCDEF0123456789"

// let a = addEventListener('click',function(){
//     let color = z(Math.floor(Math.random()*100000)+64378)
//     x.style.backgroundColor = color
//     console.log(color)
// })
// function color(){
// let z = "ABCDEF0123456789"

//     for(i=0;i<=6;i++){
//         a+= z(Math.floor(Math.random()*100000)+57843)

//     }
//     return a
// }
// let x343 = addEventListener("click", function(){

//     document.getElementById(bdy)= color()
// }
// )
