function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, parseInt('2', 10)); // Corrected: '2' is parsed into a number
console.log(result); // Output: 3