import quizComplete from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js'


export default function Summary({ userAnswers }) {

  const skippedAnswers = userAnswers.filter((answer)=>{
    return answer === null
  }).length

  const correctAnswers = userAnswers.filter((answer, index)=>{
    return answer === QUESTIONS[index].answers[0]
  }).length

  const IncorrectAnswers = userAnswers.length - skippedAnswers - correctAnswers;

  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>Quiz Completed!</h2>

      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedAnswers}</span>
          <span className='text'>Skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswers}</span>
          <span className='text'>Answered Correctly</span>
        </p>
        <p>
          <span className='number'>{IncorrectAnswers}</span>
          <span className='text'>Answered Incorrectly</span>
        </p>
      </div>

      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer'

          if(answer === null){
            cssClass += ' skipped'
          }else if (answer === QUESTIONS[index].answers[0]){
            cssClass += ' correct'
          }else{
            cssClass += ' wrong'
          }

          return (
            <li key={index}>
              <h3>{index+1}</h3>
              <p className='question'>{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          )
        })}
      </ol>
    </div >
  )
}