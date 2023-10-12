import memesData from '../memesData'

import React from 'react';

export default function Meme(){

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })


    // const [memeImage, setMemeImage] = React.useState("");
    
    function theClick(){
        const memesArray = allMemeImages.data.memes;
        const randonNumber = Math.floor(Math.random() * memesArray.length);
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: memesArray[randonNumber].url
            }
        ))
    }

        
    
    return(
        <main>
            <div className='form-wrapper'>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={theClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="img-wrapper">
                <img src={meme.randomImage} alt="meme-image" className='meme--image' />
            </div>
        </main>
    )
}
