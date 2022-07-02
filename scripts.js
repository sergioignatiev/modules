

let vis=false;
function base(x) {
    return `<h1>Hello ${x} </h1>  `
}
function sw(){
    let inp=document.getElementById("inp");
    let int=document.getElementById("in");
    let one =`<input id="inp"/><input id="in"/><button onclick="sw()">SaW</button> `
    
   if(vis==true){vis=false}
   else if(vis==false){vis=true}
   let cont=(vis==true)? one:base(int.value);



document.getElementById("demo").innerHTML=cont;
document.getElementById("img").src=inp.value}
sw()