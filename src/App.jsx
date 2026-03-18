import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import SignUp from './pages/Auth/SignUp.jsx'
import Home from '.pages/dashboard/Home.jsx'
import Expense from '.pages/dashboard/Expense.jsx'
import Income from '.pages/dashboard/Income.jsx'

const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={< Root /> } />
          <Route path="/login" exect element={ <Login/> } />
          <Route path="/signup" exect element={ <SignUp/> } />
          <Route path="/dashboard" exect element={ <Home /> } />
          <Route path="/expense" exect element={ <Expense /> } />
          <Route path="/income" exect element={ <Income /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App