import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const suffledAnswers = useRef();

  if (!suffledAnswers.current) {
    suffledAnswers.current = [...answers];
    suffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {suffledAnswers.current.map((answer) => {
        const iSelected = selectedAnswer === answer;
        let cssClass = ''

        if (iSelected) {
          answerState === 'answered' ? cssClass = 'selected' : cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button 
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ''}
            >{answer}</button>
          </li>
        )
      })}
    </ul>
  )
}