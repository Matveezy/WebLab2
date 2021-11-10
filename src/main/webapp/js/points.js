// "use strict";
// document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//
//
// let svg=document.querySelector(".svg_container");
//
// document.addEventListener("DOMContentLoaded", () =>{
//     svg.addEventListener("click", (event) =>{
//         let position= getMouse
//     })
// })
//
//
// function getMousePosition(svg,event){
//     let rect=svg.getBoundingClientRect();
//     return {
//         x : event.clientX - rect.left,
//         y : event.clientY - rect.top
//     };
// }
//
// function setPointer(x,y){
//     console.log(x + "" + y);
//     svg.insertAdjacentText("beforeend", `<circle r="5" cx="${x}" cy="${y}" fill-opacity="0.7" fill="red" stroke="firebrick"></circle>`);
// }