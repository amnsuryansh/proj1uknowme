var readlineSync = require('readline-sync')

var user = readlineSync.question('May i have your name ? ')

var score = 0

//var welcomeMsg = "welcome " + userName ;

console.log('Welcome ' + userName)

var knowMe = readlineSync.question('Do you know Suryansh ? ')
if (knowMe == 'yes') {
  console.log('you are definitely an asshole')
} else {
  console.log('you are not introduced to God!!')
}

console.log(" Anyway Let's start the messs ^^")

//var userAge = readlineSync.question('Is your age greater than 25 ? ');

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer == answer) {
    console.log('cool!')
    score = score + 1
    //console.log(score);
  } else {
    console.log('play has negative marking......lol')
    score = score - 1
  }
  console.log('current Score = ' + score)
  console.log('____________')
}

var questions = [
  { question: 'whats my pet name ? ', answer: 'shubham' },
  { question: "who's my fav superhero ? ", answer: 'thor' },
  { question: 'whats my fav food ? ', answer: 'continental' },
  { question: 'whats my fav clothing brand ? ', answer: 'max' },
  { question: 'name of my new phone ? ', answer: 'realme 7' },
  { question: 'whats my gaming name ? ', answer: 'lucifer' },
  { question: 'whts my fav book ? ', answer: 'dont even guess' },
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

if (score >= 5) {
  console.log('u enter levelTwo')
} else {
  console.log(
    'try not know suryansh मेरे बारे में इतना मत सोचना, दिल में आता हूं, समझ में नहीं।'
  )
}

var queslevelTwo = [
  { question: 'What really makes you angry?', answer: 'slow internet' },
  { question: "What's the most useless talent you have? ", answer: 'texting' },
  { question: 'whos my fav comedian ? ', answer: 'bassi' },
  { question: 'fav sport ? ', answer: 'basketball' },
  { question: 'fav team ? ', answer: 'rcb' },
  { question: 'fav drink ? ', answer: 'water' },
  { question: 'short or long hair ? ', answer: 'long' },
]

for (var i = 0; i < queslevelTwo.length; i++) {
  var currentQuestion = queslevelTwo[i]
  play(currentQuestion.question, currentQuestion.answer)
}

if (score >= 10) {
  console.log('ur score is' + score)
  console.log('u really mean to suryansh')
  console.log('u must also be crazy af to know u r the winner')
} else {
  console.log('u will never know God')
}
