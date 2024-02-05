const list = [1, 2, 3];

function sumFor(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(numList) {
  let i = 0;
  let sum = 0;

  while (i !== numList.length) {
    sum += numList[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(list));

function sumRecursion(numList) {
  if (numList.length === 0) {
    return 0;
  }
  return numList[0] + sumRecursion(numList.slice(1, numList.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(numList) {
  return _.first(numList);
}

console.log(sumTheSimpleWay(list));
