const userName = 'blackPink';
const userInput = 'blackPinK'
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());
if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
  console.log('valid user');
}
else{
  console.log('invalid user');
}