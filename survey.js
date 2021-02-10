const { profile } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profileQuestions = {
  name: `What's your name? Nicknames are also acceptable :)`,
  hobby: `What's an activity you like doing? `,
  music: `What do you listen to while doing that?  `,
  food: `Which meal is your favourite (eg: dinner, brunch, etc.)   `,
  sport: `Which sport is your absolute favourite?   `,
  superpower: `What is your superpower? In a few words, tell us what you are amazing at! `,
};

const profileGenerator = {};

rl.question(`${profileQuestions.name}`, (name) => {
  profile.name = name;
  rl.question(`${profileQuestions.hobby}`, (hobby) => {
    profile.hobby = hobby;
    rl.question(`${profileQuestions.music}`, (music) => {
      profile.music = music;
      rl.question(`${profileQuestions.food}`, (food) => {
        profile.food = food;
        rl.question(`${profileQuestions.sport}`, (sport) => {
          profile.sport = sport;
          rl.question(`${profileQuestions.superpower}`, (superpower) => {
            profile.superpower = superpower;
            rl.close();

            console.log(`My name is ${name}, I like ${hobby} and listening to ${music}. My favourite food is ${food}. 
                My favourite sport is ${sport} and my superpower is ${superpower}. Nice to meet you!`);
          });
        });
      });
    });
  });
});
