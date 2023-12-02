// 1 bag, cubes red|green|blue
// hide x cubes in bag
// get info on how many cubes in bag?
//
// EXAMPLE:
// play 5 games
// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// Sum of the Games id: 15
// this are the results.
// GAME 1 | 2 | 5  POSSIBLE: 
// The first set: 3 blue cubes and 4 red cubes;
// the second set: 1 red cube, 2 green cubes, and 6 blue cubes; 
// the third set: only 2 green cubes
//
// game 3 and 4 imposible
//
// QUIZ:
// guess which games could be played with only 12 red cubes, 13 green cubes, and 14 blue cubes
// guess the sum of the correct games id


const fs = require('fs');


const correct_answer = ['12 red', '13 green', '14 blue'];

const id = 213231

const data = fs.readFile('data.txt', 'utf-8', (err, result) => {
    if(err) {
      console.log(err);
      return;
    };

    if (typeof result === "string") {
      var array = result.split(/[\r\n]+/);
      
      // var arr = [];
      // var numberArr = [];

      array.forEach((str) => {
        const n = str.split(/\s*[(?:;,|$)(\n)]\s*/);
        console.log(n);
      });
      console.log("The Sum of the correct games id is:", id);
    };
});

