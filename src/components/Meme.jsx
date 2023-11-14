import React from "react";

export default function Meme() {
  const [memesArray, setMemesArray] = React.useState([]);

  // Meme Object state. Rerender everytime changes
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  // Fetch the url:"https://api.imgflip.com/get_memes"
  React.useEffect(function fetchIt() {
    async function getApi() {
      try {
        const callApi = await fetch("https://api.imgflip.com/get_memes");
        const memeObj = await callApi.json();
        setMemesArray(memeObj.data.memes);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
    
  }, []);

  function theClick() {
    const randonNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randonNumber].url,
    }));
  }

  function handleChange(event) {
    setMeme((prev) => ({
      ...prev,
      topText:
        event.target.name === "topText" ? event.target.value : prev.topText,
      bottomText:
        event.target.name === "bottomText"
          ? event.target.value
          : prev.bottomText,
    }));
  }

  return (
    <main>
      <div className="form-wrapper">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleChange}
        />
        <button className="form--button" onClick={theClick}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="img-wrapper">
        <p className="image-text image--top--text">{meme.topText}</p>
        <img src={meme.randomImage} alt="meme-image" className="meme--image" />
        <p className="image-text image--bottom--text">{meme.bottomText}</p>
      </div>
    </main>
  );
}
