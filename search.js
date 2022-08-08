const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. kala kala sada sada'

const searchString = 'PaKhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(Pakhi);
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLineCode = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLineCode);

// ---------------------------------------------------
// indexOf

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));
//

if (lyrics.indexOf('sada') !== -1) {
  console.log('exist inside the string');
}
else{
  console.log('cannot find it');
}

// startWith
console.log(lyrics.startsWith('Tumi'));

// endWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));