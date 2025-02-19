# Unexpected behavior when using null and undefined

This code demonstrates a common error in JavaScript when dealing with null and undefined values. The function `foo` is intended to return 0 if either `a` or `b` is null. However, if either `a` or `b` is undefined, the code will throw a TypeError.

## Bug

The bug is that the code does not handle the case where either `a` or `b` is undefined.  The strict equality operator (`===`) will not consider null and undefined to be equal. 

## Solution

The solution is to use loose equality operator (`==`) to check if either 'a' or 'b' is null or undefined.  Alternatively, use optional chaining and nullish coalescing operators to gracefully handle null and undefined values. 
