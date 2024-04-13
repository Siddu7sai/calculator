
let input=document.getElementById("input-box");
function append(n){
    input.value+=n;
}

function clr(){
    input.value="";
}
function calculate(){
    input.value=eval(input.value);
}
function remove(){
    input.value=input.value.toString().slice(0,-1);
//     for(let i=0;i<input.value.length;i++){
//      values=[input.value[i]];
//     console.log(values)
//     input.value=values.pop();
// }
}