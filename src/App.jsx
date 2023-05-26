import { useState } from 'react'
import './App.css'
import arrayelements from './index'

function App() {
  const profiles=[
                {
                  id:1,
                  name:"Kay",
                  age:25,
                  hobbies:["Readings","Gardening", "Cooking"],
                  bio:"Kay is a passionate learner who enjoys exploring new technologies."
                },
                {
                  id:2,
                  name:"Ray",
                  age:25,
                  hobbies:["Readings","Gardening", "Cooking"],
                  bio:"Alice is a passionate learner who enjoys exploring new technologies."
                },
                { 
                  id:3,
                  name:"Qay",
                  age:25,
                  hobbies:["Readings","Gardening", "Cooking"],
                  bio:"Alice is a passionate learner who enjoys exploring new technologies."
                }
  ]
   const profileoutput= profiles.map(arrayelements)

  return (
    <>
    <div class="box">
      
      <div class="outline">
        <h1>Get To Know Us</h1>
       {profileoutput}
      </div>
      </div>
        
    </>
  )
}

export default App
