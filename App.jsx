import React from "react"
import Quiz from "./components/Quiz"
import Intro from "/components/Intro"

export default function App () {
    const [gameStarted, setGameStarted] = React.useState(false)
    const [category, setCategory] = React.useState('17')
   
    function startGame() {
        setGameStarted(prevState => !prevState)
    }
    
    return (
            <main>
                {!gameStarted ? 
                <Intro 
                    startGame={startGame}
                    setCategory={setCategory}
                />:
                <Quiz 
                    startGame={startGame}
                    category={category}
                />}
            </main>
        )
}