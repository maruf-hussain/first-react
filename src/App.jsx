import { useState } from 'react'
import './App.css'
import Player from './Player.jsx'





function App() {
  

  return (
    <>
    <Player></Player>  
    </>
  )
}

// function Place({name,spot,sayefty}){
//   return(
//     <>
//     <h2>Place Name: {name}</h2>
//     <h3>Place Best Spot: {spot}</h3>
//     <h3>{sayefty}</h3>
//     </>
//   )
// }

// function Device(props){
//   return (
//     <>
//     <h2 style={{color: 'green', border:'1px solid red', padding:'10px'}}>Deviec Name: {props.name}  and Price:  {props.price}</h2>
//     </>
//   )
// };



// function Student(){
//   const studentStyle = {
//     border: '2px solid red',
//     margin: '10px',
//     padding: '10px',
//     borderRadius: '10px',
//   }
//   const person = {name: 'Maruf', age: 27};
//   const boyos = 22;
//   return (
//     <div style={studentStyle}>

//   <h3>{person.age}</h3>
//   <h2>My name is Maruf and my age is {boyos} and ist duble {person.name}</h2>
//     </div>
//   )      
// }
export default App
