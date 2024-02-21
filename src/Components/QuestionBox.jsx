import { useRef } from "react"

function QuestionBox({ currentQuestion, questions, handleClick }) {
    const focusQuestion = useRef()

    const changeColor = () => {
        focusQuestion.current.style.color = "blue";
    }

    const removeColor = () => {
        focusQuestion.current.style.color = "red";
    }

    return (
        <div className="question-box" >
            <h3>Question : <span>{currentQuestion + 1}</span> of 5</h3>

            <h2 ref={focusQuestion} >{questions[currentQuestion].text}</h2>

            <div className='opt-container' >
                {questions[currentQuestion].options.map((question) => {
                    return (
                        <button key={question.id} onClick={() => handleClick(question.isCorrect)} >{question.text}</button>
                    )
                })}
            </div>

            <footer>
                <button onClick={changeColor} >Highlight</button>
                <button onClick={removeColor} >Remove Highlight</button>
            </footer>
        </div>
    )
}

export default QuestionBox