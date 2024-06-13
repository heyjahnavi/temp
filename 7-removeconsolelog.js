const num1=5;
const num2=10;
 function addvalues(){
    console.log(`the sum is:${num1+num2}`)
 }
 addvalues()
 //this will run without exporting it it happens when we invoke a function inside a module
 //when we imoprt a module we actually invoke it
 // this func does not invoke it on its ows when the node exports this it actually wraps it in the function