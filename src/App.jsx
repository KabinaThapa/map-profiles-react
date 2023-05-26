import { useState } from 'react'
import './App.css'
import arrayelements from './index'
import img1 from './kay.jpg'
import img2 from './Ray.jpg'
import img3 from './Qay.jpg'


function App() {
  const profiles=[
                {
                  id:1,
                  name:"Kay",
                  age:25,
                  hobbies:["Readings,","Gardening,", "and Cooking"],
                  bio:"Kay is a passionate learner who enjoys exploring new technologies.",
                  image:img1
                },
                {
                  id:2,
                  name:"Ray",
                  age:20,
                  hobbies:["Writing,","Painting,", "and Dog Walking"],
                  bio:"Ray is a fun loving person who always finds people to party around.",
                  image:img2
                },
                { 
                  id:3,
                  name:"Qay",
                  age:22,
                  hobbies:["Dancing,","Hiking,", "and Cooking"],
                  bio:"Qay loves coding and is extremely shy.",
                  image:img3
                }
  ]
   const profileoutput= profiles.map(arrayelements)

  return (
    <>
    <div class="box">
      <div class="outline">
        <h1>Get To Know Our Characters</h1>

       
        {profileoutput}
        
      </div>
      </div>
        
    </>
  )
}

export default App
