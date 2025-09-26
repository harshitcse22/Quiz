import React, { useState } from 'react'
import QuestionCards from "./components/QuestionCards";
import {questions} from "./data/questions"; 


const App = () => {
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (option) =>{
    if(showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);
    
     if(option === questions[currentQuestion].answer){
         setScore(score+1);
     }
  }
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4'>
      <div className='text-center mb-8'>
      <h1 className='text-4xl font-bold text-purple-600 mb-2'>React Quiz App</h1>
      <p className='text-gray-400'>Test Your Knowledge</p>
    </div>
    <p>Score: {score}</p>
    <QuestionCards onAnswer={handleAnswer} data={questions[currentQuestion]}/>
    </div>
  );
}

export default App
