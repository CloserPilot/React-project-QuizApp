import QuestionTimer from "./QuestionTime"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from "../questions.js"

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  let timer = 10000;
  if(answer.selectedAnswer){
    timer = 1000;
  }

  if(answer.isCorrect !== null){
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000)
    }, 1000);
  }

  let answerState = ''
  if (answer.selectedAnswer) {
    if (answer.isCorrect !== null) {
      answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else {
      answerState = 'answered'
    }
  }

  //Cada vez que cambie un elemento del padre, se vuelven a evaluar los hijos
  //Se tiene un QuestionTimer
    return (
      <div id="question">
        <QuestionTimer 
          key={timer} 
          mode={answerState} 
          timeout={timer} 
          onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    )
  }