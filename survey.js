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

function weGotName(nameStr) {
  profile.name = nameStr;
  rl.question(`${profileQuestions.hobby}`, weGotHobby);
}
function weGoHobby(hobbyStr) {
  profile.hobby = hobbyStr;
  rl.question(`${profileQuestions.music}`, weGotMusic);
}
function weGotMusic(musicStr) {
  profile.music = musicStr;
  rl.question(`${profileQuestions.food}`, weGotFood);
}

function weGotFood(foodStr) {
  profile.food = food;
  rl.question(`${profileQuestions.sport}`, weGotSport);
}

function weGotSport(sportStr) {
  profile.sport = sport;
  rl.question(`${profileQuestions.superpower}`, weGotSuperpower);
}

function weGotSuperpower(superpowerStr) {
  profile.superpower = superpower;
  rl.close();

  console.log(`My name is ${name}, I like ${hobby} and listening to ${music}. My favourite food is ${food}. 
                My favourite sport is ${sport} and my superpower is ${superpower}. Nice to meet you!`);
}

rl.question(`${profileQuestions.name}`, weGotName);
