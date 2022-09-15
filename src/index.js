import {hozzaad, atlag} from './lista.js'

export function addlist(){
   let input = document.getElementById("textbox").value;  //nem működik az insert
   if(input > 0){  
    hozzaad(input)
    //alert(atlag())
    alert("ok")
   }
   else{
    alert("hibás adat")
   }
}