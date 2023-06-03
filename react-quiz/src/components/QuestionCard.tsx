import React from 'react'
import { AnswerObject } from '../App'
import { ButtonWrapper , Wrapper } from './QuestionCard.styles'

type Props = {
  question : string;
  answers: string[];
  collback : (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer : AnswerObject | undefined;
  questionNr : number;
  totalQuestions : number;
}
const QuestionCard : React.FC<Props> = ({
    question,
    answers,
    collback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html : question}}/>
      <div>
        {answers.map(answer =>(
            <ButtonWrapper
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                <button disabled ={userAnswer?true:false} value={answer} onClick={collback}>
                    <span dangerouslySetInnerHTML={{ __html:answer}}/>
                </button>
            </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard
