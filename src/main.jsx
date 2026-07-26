import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthCOntext from './context/AuthCOntext.jsx'
import TaskContext from './context/TaskContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthCOntext >
      <TaskContext >
        <App />
      </TaskContext>
    </AuthCOntext>
  </StrictMode>,
)
