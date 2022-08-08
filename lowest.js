function minInArray(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

const heights = [136, 159, 130, 149, 187];
const lowest = minInArray(heights);
console.log('Lowest height persion is: ', lowest);