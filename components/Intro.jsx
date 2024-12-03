import React from "react"

export default function Intro(props) {
    return(
        <div className="intro-page">
            <h1>Quizzical</h1>
            <h2>Answer all questions to check your score</h2>
            <div className="select-container">
                <label> Pick your category:  
                    <select
                        className="select-box"
                        value={props.category}
                        onChange={e => props.setCategory(e.target.value)}>
                        <option value="17">Science & Nature</option>
                        <option value="18">Computers</option>
                        <option value="11">Film</option>
                        <option value="23">History</option>
                        <option value="28">Vehicles</option>
                        <option value="24">Politics</option>
                    </select>
                </label>
            </div>
            <button onClick={() => props.startGame()} className="start-btn">Start quiz</button>
        </div>
        )
}