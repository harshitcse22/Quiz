import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
      <div className='text-center'>
      <h1 className='text-4xl font-bold text-purple-600 mb-2'>Quiz App</h1>
      <p className='text-gray-400'>Test Your Knowledge</p>
    </div>
    <questionCard/>
    </div>
  )
}

export default App
