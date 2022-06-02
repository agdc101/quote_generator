
/*** 
 * `quotes` array 
***/
const quotes = [
  { quote: 'It is during our darkest moments that we must focus to see the light.', 
    source: 'Aristotle' },

  { quote: 'Try to be a rainbow in someones cloud.', 
    source: 'Maya Angelou' },

  { quote: 'Find a place inside where theres joy, and the joy will burn out the pain.', 
    source: 'Joseph Campbell' },

  { quote: 'I always tell the truth. Even when I lie.', 
    source: 'Scarface',
    actor: 'Al Pacino',
    year: '1983' },

  { quote: 'There’s a force in the universe that makes things happen. And all you have to do is get in touch with it, stop thinking, let things happen, and be the ball.', 
    source: 'Ty Webb',
    actor: 'Chevy Chase',
    citation: 'Caddyshack' },

  { quote: 'Nothing is impossible, the word itself says Im possible', 
    source: 'Audrey Hepburn' },

  { quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.', 
    source: 'Robert Louis Stevenson' },

  { quote: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.', 
    source: 'Buddha' },

  { quote: 'The only thing necessary for the triumph of evil is for good men to do nothing.', 
    source: 'Edmund Burke' },

  { quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 
    source: 'Winston Churchill' }
];


/***
 * `getRandomQuote` function
***/
let prevNumber;
let number;
const getRandomQuote = () => {
  // do while loop prevents the same quote being generated.
  do {
    number = Math.floor( Math.random() * 10 );
  } while (number === prevNumber)
  prevNumber = number;
  let quote = quotes[number];
  return quote;
};

/***
 * `printQuote` function
***/
const printQuote = () => {
  let quote = getRandomQuote();
  let html = '';
  html += `<p class='quote'>${quote.quote}</p>
             <p class='source'>${quote.source}`;
  if (quote.actor) {
    html += `<span>, ${quote.actor}</span>`;
  }
  if (quote.citation) {
    html += `<span>, ${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span>, ${quote.year}</span>`;
  }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html; 
  document.getElementsByTagName('body')[0].style.backgroundColor = `${randomColour()}`; 
};

// this function uses the math.random method to return a random rbg colour. 
const randomColour = () => {
  let colour = `rgb(${Math.ceil(Math.random() * 150)}, ${Math.ceil(Math.random() * 150)}, ${Math.ceil(Math.random() * 150)})`;
  return colour;
};

// this function runs the printQuote function every 20 seconds. 
setInterval( () => { 
  printQuote(); 
}, 20000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);