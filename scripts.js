
import employees from './test.js';
const obj = JSON.parse(employees);
document.getElementById("catalog").innerHTML=obj.name+" is "+obj.age