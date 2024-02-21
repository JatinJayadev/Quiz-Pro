function Result({ score, setScore, setDisplayResult, setCurrentQuestion }) {

    const handleRestart = () => {
        setScore(0)
        setCurrentQuestion(0)
        setDisplayResult(false)
    }

    return (
        <div className="result-box">
            <header><h2>Final Results</h2></header>
            <h3>You Scored <span>{score}</span> out of 5 - (
                {(score / 5) * 100}%)
            </h3>
            <footer>
                <button onClick={handleRestart}>Restart</button>
            </footer>
        </div>
    )
}

export default Result