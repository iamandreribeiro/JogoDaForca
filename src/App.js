import { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

import img0 from "./assets/forca0.png";
import img1 from "./assets/forca1.png";
import img2 from "./assets/forca2.png";
import img3 from "./assets/forca3.png";
import img4 from "./assets/forca4.png";
import img5 from "./assets/forca5.png";
import img6 from "./assets/forca6.png";

import words from "./Words"

const images = [img0, img1, img2, img3, img4, img5, img6];

const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let i = 0;

let novoArray = [];

export default function App() {
    const [disabled, setDisabled] = useState(false);
    const [disabledInput, setDisabledInput] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [hangman, setHangman] = useState(images[i]);
    const [word, setWord] = useState([]);
    const [hideWord, setHideWord] = useState([]);

    function escolhaPalavra() {
        setDisabled(true);
        setDisabledInput(false);
        setDisabledButton(false);

        const randomElement = words[Math.floor(Math.random() * words.length)];
        console.log(randomElement);
        setWord(randomElement.split(""));
     
        for(let i = 0; i < randomElement.length; i++) {
            novoArray.push('_');
        }

        console.log(novoArray.length);
        setHideWord(novoArray);        
    }

    // function escolhaPalavra() {
    //     if (i == 5) {
    //         setDisabled(true);
    //         setTimeout(() => {
    //             alert("Perdeu");
    //         }, 200)
    //     }

    //     i++;
    //     setHangman(images[i]);
    // }    

    console.log(hideWord);
    console.log(novoArray);
    console.log(word);

    return (
        <div className="container">
            <div className="gameScreen">
                <img src={hangman} alt="vaiCurintia :eagle:" />

                <button onClick={escolhaPalavra} disabled={disabled}>Escolher palavra</button>

                <div className="choosenWord">
                    {
                        hideWord.map((word, index) => {
                            return <div key={index}>
                                <h1>{word.toUpperCase()}</h1>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="keyboardScreen">
                <div className="keyboard">
                    {
                        letters.map((letter, index) => {
                            return <button value={letter} key={index} className="key" disabled={disabledButton}>
                                {letter}
                            </button>
                        })
                    }
                </div>

                <div className="guessWord">
                    Já sei a palavra!
                    <input type="text" placeholder="Escreva aqui..." onChange={() => console.log("Mudou o valor!")} disabled={disabledInput}></input>
                    <button>Chutar</button>
                </div>
            </div>
        </div>
    )
}