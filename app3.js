const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf8');

const words = content.split(' ');
const reactMatches = content.match(/react/gi);

console.log('Palabras: ',{ react : reactMatches.length, words : words.length });
