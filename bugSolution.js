function foo(a, b) {
  if (a == null || b == null) {
    return 0;
  }
  return a + b;
}

//Alternative solution using optional chaining and nullish coalescing
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0);
}