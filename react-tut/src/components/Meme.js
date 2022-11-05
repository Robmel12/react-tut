import React, { useState } from "react";
import MemeStyles from "./Meme.module.scss";

export default function Meme() {
  let clientID = "5msstX_t_AjzFAx9GvGCYgxd43GMAzUspzP_5aH4IO4";
  let endpoint = `https://api.unsplash.com/photos/?client_id=${clientID}`;
  let data = [];
  function async 
  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((jsonData) => {
      data.push(jsonData);
    });
  const [photo, setphoto] = useState("second");
  const [memeWords, setMemeWords] = useState({
    firstWords: "",
    secondWords: "",
  });
  console.log(data[0]);
  function handleChange(e) {
    const { name, value } = e.target;
    setMemeWords((prevMemeWords) => ({
      ...prevMemeWords,
      [name]: value,
    }));
    console.log(memeWords);
  }
  function handleClick(e) {
    e.preventDefault();
    console.log(memeWords.firstWords, " ", memeWords.secondWords);
  }
  return (
    <main className={MemeStyles.main}>
      <form className={MemeStyles.form} onSubmit={handleClick}>
        <input
          className={MemeStyles.input}
          type="text"
          placeholder="shut up"
          onChange={(e) => handleChange(e)}
          value={memeWords.firstWords}
          name="firstWords"
        ></input>
        <input
          className={MemeStyles.input}
          type="text"
          placeholder="and take my money"
          onChange={(e) => handleChange(e)}
          value={memeWords.secondWords}
          name="secondWords"
        ></input>
        <button className={MemeStyles.button} type="submit">
          Add Meme
        </button>
      </form>
      <div className={MemeStyles.imageContainer}>
        <img
          className={MemeStyles.image}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <p className={MemeStyles.firstWord}>{memeWords.firstWords}</p>
        <p className={MemeStyles.secondWord}>{memeWords.secondWords}</p>
      </div>
    </main>
  );
}
