import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ChatBox from './components/ChatBox'

function App() {
  // Access environment variable defined in .env as VITE_API_KEY
  const apiKey = import.meta.env.VITE_API_KEY;




  return (
    <div className="app">
      <h1 className='header'>Welcome to my Language Learning Chatbot!</h1>
      <button className='toggle-button'>Begin Transcription</button>
      <div className='transcript-box'>...Listening</div>

    </div>
  );
}

export default App
