import React from 'react'
import MemeStyles  from './Meme.module.scss'



export default function Meme(){
    function handleClick(e){
        e.preventDefault();
        console.log('clicked')
    }
  return (
    <main className={MemeStyles.main}>
    <form className={MemeStyles.form}>
      <input className={MemeStyles.input}type='text' placeholder='shut up'></input>
      <input className={MemeStyles.input}type='text' placeholder='and take my money'></input>  
      <button className={MemeStyles.button} onClick={(e)=> handleClick(e)}>Add Meme</button>  
    </form>
    </main>
  )
}
