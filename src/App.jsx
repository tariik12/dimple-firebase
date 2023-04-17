import { useState } from 'react'
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase.config';
const auth  = getAuth(app)
function App() {
  const [count, setCount] = useState(0)
const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSingIn =() =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setUser(loggedUser)
    })
    .catch (error =>{
      console.log(error)
    })
  } 
  return (
    <div className="App">
    
      <h1>firebase + React</h1>
      <button onClick={handleGoogleSingIn}> google SingIn</button>
    {user &&
       <div>
        <h2>{user.displayName}</h2>
       </div>
    }
    </div>
  )
}

export default App
