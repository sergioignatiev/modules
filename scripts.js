import {one,two} from './message.js';
let vis=true;
function sw(){
   if(vis==true){vis=false}
   else if(vis==false){vis=true}
}



document.getElementById("demo").innerHTML=one("hi")+two("I")