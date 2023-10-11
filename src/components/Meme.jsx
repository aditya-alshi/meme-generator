import memesData from '../memesData'

import React from 'react';

export default function Meme(){

    

    const [memeImage, setMemeImage] = React.useState("");

    
    function theClick(){
        const memesArray = memesData.data.memes;
        const randonNumber = Math.floor(Math.random() * memesArray.length);

        setMemeImage(memesArray[randonNumber].url)
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
                <img src={memeImage} alt="meme-image" className='meme--image' />
            </div>
        </main>
    )
}
