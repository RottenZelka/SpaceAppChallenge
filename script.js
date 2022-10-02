const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const greetingtext = document.getElementById('text')
const container = document.getElementById("cont")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .11)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  greetingtext.classList.add('hide')
  container.style.height = "260px"
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  greetingtext.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

  greetingtext.classList.remove('hide')
  if(correct)
  {
    greetingtext.innerText = "Correct!"
  }else{
    greetingtext.innerText = "Wrong!"
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)

  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How much segments does the primary mirror of the James Webb telescope has?',
    answers: [
      { text: '18', correct: true },
      { text: '22', correct: false },
      { text: '30', correct: false },
      { text: '12', correct: false }
    ]
  },
  {
    question: 'When was the James Webb telescope launched?',
    answers: [
      { text: ' December 25, 2021 ', correct: true },
      { text: ' December 25, 2020 ', correct: false },
      { text: ' January 25, 2022 ', correct: false },
      { text: 'January 25, 2020', correct: false }
    ]
  },
  {
    question: 'What is the primary mirror material of the James Webb telescope?',
    answers: [
      { text: 'polished metal', correct: false },
      { text: 'beryllium coated with gold', correct: true },
      { text: 'gold plated aluminum', correct: false },
      { text: 'glass', correct: false }
    ]
  },
  {
    question: 'How much does the James Webb telescope weigh?',
    answers: [
      { text: '6 tons', correct: true },
      { text: '8 tons', correct: false },
      { text: '4 tons', correct: false },
      { text: '2 tons', correct: false },
    ]
  },
  {
    question: 'What is the operating tempreture of the James Webb telescope?',
    answers: [
      { text: '-220°C', correct: false },
      { text: '-370 °F', correct: false },
      { text: 'under 50K', correct: false},
      { text: 'everything above', correct: true}
    ]
  },
  {
    question: 'How much does the primary mirror of the James Webb telescope weigh?',
    answers: [
      { text: '705 kg', correct: true },
      { text: '1 ton', correct: false },
      { text: '905 kg', correct: false },
      { text: '600 kg', correct: false },
    ]
  },
  {
    question: 'How far from the Earth is the James Webb telescope?',
    answers: [
      { text: '100 thousand km', correct: false },
      { text: '10 thousand km', correct: false },
      { text: '1.5 million km', correct: true },
      { text: '1 million km', correct: false },
    ]
  },
  {
    question: ' What is the size of the five layer deployable shield of the James Webb telescope?',
    answers: [
      { text: 'tennis court sized', correct: true },
      { text: 'football court sized', correct: false },
      { text: '10 square meters', correct: false },
      { text: 'table tennis sized', correct: false },
    ]
  },
  {
    question: ' How many science instruments does the James Webb telescope have?',
    answers: [
      { text: '10', correct: false },
      { text: '8', correct: false },
      { text: '5', correct: false },
      { text: '4', correct: true },
    ]
  },
  {
    question: ' When was the first idea for the James Webb telescope pitched?',
    answers: [
      { text: '1983', correct: false },
      { text: '1996', correct: true },
      { text: '2008', correct: false },
      { text: '2005', correct: false },
    ]
  },
  {
    question: ' What was the first image from the James Webb telescope?',
    answers: [
      { text: 'Ursa Major', correct: false },
      { text: 'SMACS 0723', correct: true },
      { text: 'the Earth', correct: false },
      { text: 'FOSOB 681', correct: false },
    ]
  },
  {
    question: ' When was the first image from the James Webb telescope?',
    answers: [
      { text: 'January 10 2022', correct: false },
      { text: 'February 28 2022', correct: false },
      { text: 'May 4 2022', correct: false },
      { text: 'July 12 2022', correct: true },
    ]
  },
]