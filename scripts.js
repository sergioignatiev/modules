import {one,two} from './message.js';
let vis=true;
function sw(){
   if(vis==true){vis=false}
   else if(vis==false){vis=true}
   let cont=(vis==true)? one:two;




document.getElementById("demo").innerHTML=cont}
sw()