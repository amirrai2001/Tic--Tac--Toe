'use strict'
let boxEEl= document.getElementsByClassName('box');
let infoEl = document.getElementById('info')
let resetbtnEl = document.getElementById('reset');
let boxtextEl = document.getElementsByClassName('boxtext');


let turn = 'X';
 let isgameover = false;




let changeturn = ()=>{
   return turn === 'X' ? '0' : 'X'
}

let checkwin=()=>{
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
wins.forEach(e =>{
if ((boxtextEl[e[0]].innertext === boxtextEl[e[1]].innertext) && (boxtextEl[e[2]].innertext === boxtextEl[e[1]].innertext ) && (boxtextEl[e[0]].innertext !=='')) {
        
         infoEl.innertext=boxtextEl[e[0]].innertext +'won'
            isgameover=true
        }}
     )
}

Array.from(boxEEl).forEach(Element =>{
    let boxtextEl=Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if (boxtextEl.innerText ==='') {
            boxtextEl.innerText=turn;
             turn = changeturn()
             changeturn()
            
             checkwin()
             
           
    
        
        if (!isgameover) {
            infoEl.innerText='turn for'+ " "  +  turn
        }
    
    }})
})
reset.addEventListener('click', ()=>{

  Array.from(boxtextEl).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false

    infoEl.innerText  = "Turn for " + " " + turn;
})
