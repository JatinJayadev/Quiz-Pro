function Result({ score, setScore, setDisplayResult, setCurrentQuestion }) {

    const handleRestart = () => {
        setScore(0)
        setCurrentQuestion(0)
        setDisplayResult(false)
    }

    return (

        // This is score container
        < div className="result-box" >

            <header>
                <h2> Final Results </h2>
            </header>

            {/* Total Score and Percentage */}
            <h3>You Scored <span>{score}</span> out of 5 - (
                {(score / 5) * 100}%)
            </h3>

            {/* Button to restart */}
            <footer className="flex" >
                <button onClick={handleRestart}>Restart</button>
            </footer>
        </div >
    )
}

export default Result