/*
* Problem statement:
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143?
*/
var pF = function(num){
  var root = Math.sqrt(num),  
  result = arguments[1] || [],  //get unnamed paremeter from recursive calls
  x = 2; 
  
  if(num % x){//if not divisible by 2 
   x = 3;//assign first odd
   while((num % x) && ((x = x + 2) < root)){}//iterate odds
  }
  //if no factor found then num is prime
  x = (x <= root) ? x : num;
  result.push(x);//push latest prime factor

  //if num isn't prime factor make recursive call
  return (x === num) ? result : pF(num/x, result) ;
}
var f3 = function(){
	var pfs = pF(600851475143);
	document.write(pfs[pfs.length-1]);
}