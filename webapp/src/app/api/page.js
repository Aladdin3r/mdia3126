"use client"
import { useState } from 'react';

export default function Page() {

    const [media, setMedia] = useState(null);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2";

    async function fetchMedia() {
        const response = await fetch(API_URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setMedia(data);
    }
    
    const MediaOutput = () => {
        if (media) {

            let mediaList = [];

            media.forEach((mediaItem, index) => {
                mediaList.push(
                    <li className="mb-2 text-center" key={index}>
                        <h2 className="text-xl">{mediaItem.title}</h2>
                        <img src={mediaItem.url} alt={mediaItem.explanation} />
                        <p>{mediaItem.explanation}</p>
                    </li>
                )
            })

           return ( 
                <div className="p-4 mb-4 border-4 border-black text-center">
                    <ul>
                        {mediaList}
                    </ul>
                </div>
            )
        }

       return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                🌭No🌭Media🌭Yet🌭
            </div>
        )
    }

    return (
        <div className="bg-yellow-300">
            <header className="p-4 mb-4 border-4 border-black text-center">
                <h1>Welcome to my product page!</h1>
                <button
                    className="text-yellow-300 bg-black"
                    onClick={fetchMedia}
                >
                   🚀 Fetch Media!
                </button>
            </header>
            <MediaOutput />
        </div>
    );
}