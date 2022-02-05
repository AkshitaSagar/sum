function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}


 
console.log("The Sum Of Given Two Numbers Are: " + sum  ( 8 , 9) );         
console.log("The Sum Of Given Two Numbers Are: " + sum( -10, 1));       
console.log("The Sum Of Given Numbers Are: " + sum(  1, 1, 1, 1));  
console.log("The Sum Of Given Two Numbers Are: " + sum());   



function add(x, y) {
    return x+y;
}
function add(x, y, z) {
    return x+y+z;
}
 
console.log("The Sum Of Given Two Numbers Are: " + add(2, 3));      
console.log("The Sum Of Given Two Numbers Are: " + add(-1, 1));   
 
console.log("The Sum Of Given Numbers Are:" + add(8, -2, 10));   