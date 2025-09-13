import React from 'react'

const QuestionCards = ({data}) => {
  const {question, options,answer} = data;
  return (
    <div className='bg-gray-800 p-6 rounded-2xl shadow-lg w-full
      max-w-l border border-gray-700'>
     <p>{question}</p>
     <div className='grid gap-3'>
      {options.map((option,index)=>(
        <button 
        className='text-left px-4 py-3 cursor-pointer bg-blue-800
         rounded-lg text-white'
        key={index}>{option}</button>
      ))} 
     </div>
    </div>
  )
}

export default QuestionCards;