import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
      <div className="logo-box">
        
        <img src="./twiter.png" alt="apple" className='logo' />
        <h2>sign in Twitter</h2>

        <button>
        <img src="./google.png" alt="apple" />
        sign in with google
        </button>
        <button>
        <img src="./apple.png" alt="apple" className='logo3'/>
        sign in with apple
        </button>
        <hr/>
        <span>or</span>
        <form action="">
          <input type="text" placeholder='user name or email' />
          <button>next</button>
        </form>

        <button>forget password</button>
        <p>don't have an account <a href="">sign up</a></p>




      </div>
    
  )
}

export default App
