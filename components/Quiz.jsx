import React from "react"
import Question from "/components/Question"
import Score from "/components/Score"

import { nanoid } from "nanoid"
import { decode } from 'html-entities';

export default function Quiz(props) {
 const [formattedQuestions, setFormattedQuestions]= React.useState([])
 const [selectedAnswers, setSelectedAnswers] = React.useState([])
 const [checkAnswers, setCheckAnswers] = React.useState(false)


   React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5&category=${props.category}&difficulty=medium&type=multiple`)
    .then(res => res.json())
    .then(data => {
       const  formattedData = data.results.map(question => {
                  // format correct answer object
                  const correctOption = 
                        {optionText: decode(question.correct_answer), 
                        optionId: nanoid(), 
                        isCorrect: true,
                        isSelected: false}
                  //format incorrect answer object array
                  const options = question.incorrect_answers.map(option => {
                     return  {optionText: decode(option), 
                              optionId: nanoid(), 
                              isCorrect: false,
                              isSelected: false}
               })
               //combine and shuffle correct and incorrect answers
               options.push(correctOption)
               options.sort( () => .5 - Math.random() )
                  const qObject = {questionText: decode(question.question), questionId: nanoid(), options:options}
                  return qObject
            })
      setFormattedQuestions(formattedData)
    })
   },[props.startGame])

   function updateSelectedAnswers (questionId, answerId, isCorrect) {
     setSelectedAnswers(prevState => ({...prevState, [questionId]:{answerId, isCorrect}}))
   }

   // updates main questions array with isSelected
   function setSelectedOptions(questionId, answerId, isCorrect){
      updateSelectedAnswers(questionId, answerId, isCorrect)
      setFormattedQuestions(prevQuestions => 
        prevQuestions.map(question => 
        question.questionId === questionId 
        ? {
            ...question, 
            options: question.options.map(option => 
               option.optionId === answerId
               ? {...option, isSelected: !option.isSelected}
               : {...option, isSelected: false})      
            }
      : question 
      )
   )
  
   }

   const questionsArr = formattedQuestions.map(question => {
      return (
         <Question 
                  key= {nanoid()}
                  questionText={question.questionText}
                  questionId={question.questionId}
                  options={question.options}
                  setSelectedOptions={setSelectedOptions}
                  formattedQuestions = {formattedQuestions}
                  checkAnswers={checkAnswers}
                  
               />
               )    
    })
 

    
    return (
      <div className="quiz-container">
        {questionsArr}
         {Object.entries(selectedAnswers).length ===5 && !checkAnswers && 
         <button className="check-answer-btn"
                  onClick={() => setCheckAnswers(prevState => !prevState)}>Check answers</button>}
        {checkAnswers && <Score 
         selectedAnswers={selectedAnswers}
         restartGame={props.startGame}
         />}
      </div>
    )
}