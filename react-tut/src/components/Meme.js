import React, { useState } from 'react'
import MemeStyles  from './Meme.module.scss'



export default function Meme(){
  const [memeWords, setMemeWords] = useState({
    firstWords: '',
    secondWords: ''
  })
    function handleClick(e){
        e.preventDefault();
        setMemeWords({firstWords : e.target[0].value,
        secondWords: e.target[1].value})
      }
  return (
    <main className={MemeStyles.main}>
    <form className={MemeStyles.form} onSubmit={handleClick}>
      <input className={MemeStyles.input}type='text' placeholder='shut up'></input>
      <input className={MemeStyles.input}type='text' placeholder='and take my money'></input>  
      <button className={MemeStyles.button} type="submit" >Add Meme</button>  
    </form>
    <div className={MemeStyles.imageContainer}>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
      <h1 className={MemeStyles.firstWord}>{memeWords.firstWords}</h1>
      <h1 className={MemeStyles.secondWord}>{memeWords.secondWords}</h1>
    </div>
    </main>
  )
}
