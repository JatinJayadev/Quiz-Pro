import { useEffect, useState, useMemo } from 'react'
import './App.css'
import questions from './questions'
import Logo from './Images/Logo-1.png'
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [themeDisplayName, setThemeDisplayName] = useState("Dark")
  const [displayResult, setDisplayResult] = useState(false)

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore(prevScore => prevScore + 1)
    }

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setDisplayResult(true)
    }
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

  const handleBoxShadow = useMemo(() => {
    return {
      boxShadow: isDarkTheme ? " 4px 4px 0.5px 0px #5D16EB,-4px -4px 1px rgba(255, 255, 255, 0.3)" : " 4px 4px 0.5px 0px #5D16EB,-4px -4px 1px rgba(0, 0, 0, 0.3)",
    }
  }, [isDarkTheme])

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
  }, [isDarkTheme]);

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

      <main style={handleBoxShadow} >
        {displayResult ? <Result setDisplayResult={setDisplayResult} setCurrentQuestion={setCurrentQuestion} setScore={setCurrentScore} score={currentScore} /> : <QuestionBox currentQuestion={currentQuestion} questions={questions} handleClick={handleClick} />
        }
      </main>
    </div >
  )
}

export default App
