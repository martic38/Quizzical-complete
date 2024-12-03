import React from "react"
import { nanoid } from "nanoid"
import OptionButton from './OptionButton'

export default function Question( props) {

    const buttons = props.options.map(option => {
        
       return <OptionButton 
                    isCorrect = {option.isCorrect}
                    isSelected = {option.isSelected}
                    questionId = {props.questionId}
                    optionText = {option.optionText}
                    optionId={option.optionId}
                    checkAnswers={props.checkAnswers}
                    key={nanoid()}
                    setSelectedOptions={props.setSelectedOptions}         
                />
            }
        )
        
    return (
        <div className="question-container">
            <h1>{props.questionText}</h1>
            <div className="option-container">
                {buttons}
            </div> 
        </div>
    )
}