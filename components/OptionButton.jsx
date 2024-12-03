import React from "react"
import { nanoid } from 'nanoid'


export default function OptionButton (props) {

    const checkedStyle = { backgroundColor: props.isCorrect ? '#94D7A2' 
                                    : props.isSelected ? '#F8BCBC' :
                                    'none',
                          opacity: props.isCorrect ? 1 
                                    : props.isSelected ? 0.5 :
                                    'none',          
                                    }
    const normalStyle = { backgroundColor: props.isSelected ? '#D6DBF5' : 'none',
                            border: props.isSelected ? 'none' : '2px #4D5B9E solid'}
                            
    return (
            <button  
                style= {props.checkAnswers ? checkedStyle : normalStyle}
                key={nanoid()}
                className="option-btn"
                onClick={() => props.setSelectedOptions(props.questionId, 
                                                        props.optionId,
                                                        props.isCorrect)}
                                                        >
                {props.optionText}
            </button>        
    )
}