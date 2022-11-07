import React, { useEffect, useState } from "react";
import MemeStyles from "./Meme.module.scss";

export default function Meme() {
  let clientID = "5msstX_t_AjzFAx9GvGCYgxd43GMAzUspzP_5aH4IO4";
  let endpoint = `https://api.unsplash.com/photos/?client_id=${clientID}`;
  const [photoData, setPhotoData] = useState({});
  const [photo, setPhoto] = useState("");
  function getRandomPhoto() {
    let randomNUM = Math.floor(Math.random() * photoData.length);
    return photoData[randomNUM]?.urls.regular;
  }

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setPhotoData(data);
      });
  }, [endpoint]);
  useEffect(() => {
    setPhoto(getRandomPhoto());
  }, [photoData]);
  console.log(photo);

  const [memeWords, setMemeWords] = useState({
    firstWords: "",
    secondWords: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setMemeWords((prevMemeWords) => ({
      ...prevMemeWords,
      [name]: value,
    }));
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
        <img className={MemeStyles.image} src={photo} />
        <p className={MemeStyles.firstWord}>{memeWords.firstWords}</p>
        <p className={MemeStyles.secondWord}>{memeWords.secondWords}</p>
      </div>
    </main>
  );
}
