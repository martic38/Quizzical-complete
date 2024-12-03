import React from "react"

export default function Score(props) {

   let score = 0
   const scoreArr = Object.values(props.selectedAnswers)
   
   scoreArr.forEach(item => {
        if(item.isCorrect){
            score++
        }
    })
   
    return(
        <footer>
            <h2 className="score">You scored {score}/5 correct answers</h2>
            <button onClick={() => props.restartGame()} className="reset-game-btn">Play again</button>
        </footer>
        )
}