/**
 data type 2
  Primitive     : String, Number, Boolean, Undefined. 
  Non-Primitive : Reference Variable ( Object, array, Function)
 */

//   Primitive   
let a = 5;
let b = 6;
b = a;
console.log('a:', a);
console.log('b:', b);

// Non-Primitive
let nums1 = [1, 2, 4];
let nums2 = nums1;

nums2.push(5)

console.log('nums1:',nums1)
console.log('nums2:',nums2)