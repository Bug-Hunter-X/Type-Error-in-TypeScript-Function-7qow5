# Type Error in TypeScript Function

This example demonstrates a common type error in TypeScript: passing a string argument to a function that expects a number.

## Bug

The function `add` is defined to take two number parameters and return their sum.  However, the code calls `add` with a string '2' as the second argument. This results in a type error.

## Solution

The solution is to ensure that the arguments passed to the function match the expected types. In this case, we can convert the string '2' to a number using `parseInt()` before passing it to the function.