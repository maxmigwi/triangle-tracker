function confirmTriangle(){


var a=parseInt(document.getElementById('a').value)
var b=parseInt(document.getElementById('b').value)
var c=parseInt(document.getElementById('c').value)

if(a===b && b===c && c===a){
  alert("This is an equilateral triangle");
}else if(a===b && b===c && c!==a){
  return(This is an Isosceles triangle);
}
else {
  return(scalene);
}







}
