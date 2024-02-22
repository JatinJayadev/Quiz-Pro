import { useEffect, useState, useMemo } from 'react'
import './App.css'
import questions from './questions'
import Logo from './Images/Logo-1.png'
import LogoBackUp from './Images/Logo-2.png'
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';

function App() {

  // Use State Hook for storing values and modiying it
  const [currentQuestion, setCurrentQuestion] = useState(0); //To keep track of Current Question
  const [currentScore, setCurrentScore] = useState(0) //To keep track of Current Score
  const [isDarkTheme, setIsDarkTheme] = useState(false) //To Change between modes
  const [themeDisplayName, setThemeDisplayName] = useState("Dark") //To change modes
  const [displayResult, setDisplayResult] = useState(false) //To display result components


  //Code for checking if clicked option is true or false, Changing question
  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore(prevScore => prevScore + 1)
    }

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setDisplayResult(true)
    }
  }

  //Changing value from false to true between modes if user clicks on toggle button 
  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  //Using useEffect to change text inside toggle button
  useEffect(() => {

    setThemeDisplayName(isDarkTheme ? "Light" : "Dark")

  }, [isDarkTheme]) //Dependency as isDarkTheme to change accordingly


  //Implementing useMemo to memorize the value

  const handleBackGround = useMemo(() => {  //Function to handle background Color

    document.body.style.backgroundColor = isDarkTheme ? "black" : "white"; //If true then black background otherwise White

    return {
      backgroundColor: isDarkTheme ? "black" : "white",
    };

  }, [isDarkTheme]);


  // To change Box-Shadow
  const handleBoxShadow = useMemo(() => {

    return {
      boxShadow: isDarkTheme ? " 4px 4px 0.5px 0px #5D16EB,-4px -4px 1px rgba(255, 255, 255, 0.3)" : " 4px 4px 0.5px 0px #5D16EB,-4px -4px 1px rgba(0, 0, 0, 0.3)",
    }

  }, [isDarkTheme])


  //To change Font Color
  const handleFontColor = useMemo(() => {

    return {
      color: isDarkTheme ? "white" : "black",
    }

  }, [isDarkTheme])


  //To change Toggle button background
  const handleToggleBg = useMemo(() => {

    return {
      backgroundColor: isDarkTheme ? "white" : "#5D16EB",
      color: isDarkTheme ? "#5D16EB" : "black",
    }

  }, [isDarkTheme]);


  return (
    <div className='main-container' style={handleBackGround} >

      {/* Logo and Toggle button */}
      <header className='flex' >

        {/* Logo and Name */}
        <div className='logo flex' >
          <img src={Logo} alt={LogoBackUp} />
          <h1 style={handleFontColor}>QuizPro</h1>
        </div>

        {/* Toggle Button */}
        <div>
          <button onClick={handleToggle} style={handleToggleBg} className='toggleBtn'>{themeDisplayName}</button>
        </div>
      </header>

      {/* Displaying data inside main  */}
      <main style={handleBoxShadow} >
        {displayResult ? <Result setDisplayResult={setDisplayResult} setCurrentQuestion={setCurrentQuestion} setScore={setCurrentScore} score={currentScore} /> : <QuestionBox currentQuestion={currentQuestion} questions={questions} handleClick={handleOptionClick} />
        }
      </main>

    </div >
  )
}

export default App
