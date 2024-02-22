import { useRef } from "react"

function QuestionBox({ currentQuestion, questions, handleClick }) {

    // useRef to keep focus on the Question 
    const focusQuestion = useRef()

    // Highlighting the question
    const changeHighlight = (color) => {
        if (color === "red") {
            focusQuestion.current.style.color = "red";
        } else {
            focusQuestion.current.style.color = "blue";
        }
    }

    return (
        <div className="question-box" >

            {/*Keeping Track of Current Question */}
            <h3>Question : <span>{currentQuestion + 1}</span> of 5</h3>

            {/* Displaying Question */}
            <h2 ref={focusQuestion} >{questions[currentQuestion].text}</h2>

            {/* Option Container */}
            <div className='opt-container flex' >
                {questions[currentQuestion].options.map((question) => {
                    return (
                        <button key={question.id} onClick={() => handleClick(question.isCorrect)} >{question.text}</button>
                    )
                })}
            </div>

            {/* Buttons to change font color */}
            <footer className="flex">
                <button onClick={() => { changeHighlight("blue") }} >Highlight</button>
                <button onClick={() => { changeHighlight("red") }} >Remove Highlight</button>
            </footer>
        </div>
    )
}

export default QuestionBox