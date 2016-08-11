function args() {
  return arguments.length;
}

args(1,2,3);

function args() {
  console.log(arguments.pop());
}

args(1,2,3);
// ...arguments.pop is not a function
