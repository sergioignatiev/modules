

let vis=false;
function base(x) {
    return `<h1>Hello ${x} </h1>  `
}
function sw(){
    let inp=document.getElementById("inp")
    let one =`<input id="inp"/><button onclick="sw()">SaW</button> `
    
   if(vis==true){vis=false}
   else if(vis==false){vis=true}
   let cont=(vis==true)? one:base(vis);



document.getElementById("demo").innerHTML=cont;
document.getElementById("img").src=inp.value}
sw()