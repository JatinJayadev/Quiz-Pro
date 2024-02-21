import { useEffect, useState, useMemo } from 'react'
import './App.css'
import questions from './questions'
import Logo from './Images/Logo-1.png'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [themeDisplayName, setThemeDisplayName] = useState("Dark")

  const handleClick = (optionClicked) => {
    if (optionClicked) {
      setCurrentScore(prevScore => prevScore + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
    console.log(currentScore)
  }

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    setThemeDisplayName(isDarkTheme ? "Light" : "Dark")
  }, [isDarkTheme])

  const handleBackGround = useMemo(() => {
    document.body.style.backgroundColor = isDarkTheme ? "black" : "white";
    return {
      backgroundColor: isDarkTheme ? "black" : "white",
    };
  }, [isDarkTheme]);

  const handleColor = useMemo(() => {
    return {
      color: isDarkTheme ? "white" : "black",
    }
  }, [isDarkTheme])

  const handleToggleBg = useMemo(() => {
    return {
      backgroundColor: isDarkTheme ? "white" : "#5D16EB",
      color: isDarkTheme ? "#5D16EB" : "black",
    }
  }, [isDarkTheme])

  return (
    <div className='main-container' style={handleBackGround} >
      <header>
        <div className='logo' >
          <img src={Logo} alt="" />
          <h1 style={handleColor}>QuizPro</h1>
        </div>

        <div>
          <button onClick={handleToggle} style={handleToggleBg} className='toggleBtn'>{themeDisplayName}</button>
        </div>
      </header>

      <main>
        <div>
          <h3>Question : <span>{currentQuestion + 1}</span> of 5</h3>

          <h2>{questions[currentQuestion].text}</h2>

          <div className='opt-container' >
            {questions[currentQuestion].options.map((question) => {
              return (
                <button key={question.id} onClick={() => handleClick(question.isCorrect)} >{question.text}</button>
              )
            })}
          </div>

          <footer>
            <button>Highlight</button>
            <button>Remove Highlight</button>
          </footer>

        </div>
      </main>
    </div >
  )
}

export default App
