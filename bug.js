function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause a bug if a or b is undefined instead of null
  }
  return a + b;
}