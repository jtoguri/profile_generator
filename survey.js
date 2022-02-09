const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bio = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  bio.name = name;
  rl.question("What's an activity you like doing? ", (activity) => {
    bio.activity = activity;
    rl.question("What do you listen to while doing that? ", (song) => {
      bio.song = song;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (favMeal) => {
        bio.favMeal = favMeal;
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          bio.favFood = favFood;
          rl.question("Which sport is your absolute favourite? ", (favSport) => {
            bio.favSport = favSport;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              bio.superpower = superpower;
              console.log(`\n${name} loves listening to ${song} while ${activity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superpower}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});