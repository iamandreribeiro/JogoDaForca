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

import words from "./Words";

const images = [img0, img1, img2, img3, img4, img5, img6];

const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let i = 0;

let randomWord = [];
let novoArray = [];
let pressedKeys = [];
let cleanAccent = [];
let guessArray = [];

export default function App() {
    const [disabled, setDisabled] = useState(false);
    const [disabledInput, setDisabledInput] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [hangman, setHangman] = useState(images[i]);
    const [word, setWord] = useState([]);
    const [hideWord, setHideWord] = useState([]);
    const [input, setInput] = useState("");
    const [color, setColor] = useState("");
    const [clicked, setClicked] = useState(letters);

    function startGame() {
        setClicked([]);
        setDisabled(true);
        setDisabledInput(false);
        setDisabledButton(false);

        randomWord = words[Math.floor(Math.random() * words.length)];

        cleanAccent = randomWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        setWord(cleanAccent.split(""));

        for (let i = 0; i < randomWord.length; i++) {
            novoArray.push('_');
        }

        setHideWord(novoArray);
    }

    function guessWord(e) {
        setDisabledInput(true);
        setInput(e.target.value);

        for (let i = 0; i < randomWord.length; i++) {
            guessArray.push(randomWord[i]);
        }

        if (input.toLowerCase() === randomWord.toLowerCase()) {
            setColor("green");
            setHideWord(guessArray);
            setTimeout(() => {
                alert("Parabéns!!! Você ganhou o jogo! 😁");
                setClicked(letters);
                window.location.reload();
            }, 50);
        } else {
            setHangman(images[images.length - 1]);
            setColor("red");
            setHideWord(guessArray);
            setTimeout(() => {
                alert("Poxa, que pena! Você perdeu... 😞");
                setClicked(letters);
                window.location.reload();
            }, 50);
        }
    }

    function pickKey(key) {
        setClicked([...clicked, key]);

        pressedKeys.push(key);

        cleanAccent.toUpperCase().includes(key) ? rightGuess(key) : wrongGuess(); 
    }

    function rightGuess(key) {
        word.map((w, i) => {
            if(w.toUpperCase() === key) {
                novoArray[i] = randomWord[i];
                setHideWord(novoArray);
            }
        })

        checkWin();
    }

    function wrongGuess() {
        i++;

        setHangman(images[i]);

        if(i > 5) {
            setHangman(images[images.length - 1]);
            setColor("red");
            setHideWord(word);
            setTimeout(() => {
                alert("Poxa, que pena! Você perdeu... 😞");
                setClicked(letters);
                window.location.reload();
            }, 50);
        }
    }

    function checkWin() {
        let finalWord = hideWord.filter((h) => (h !== '_'));
        
        if(finalWord.join("") === hideWord.join("")) {
            setColor("green");            
            setTimeout(() => {
                alert("Parabéns!!! Você ganhou o jogo! 😁");
                setClicked(letters);
                window.location.reload();
            }, 50);
        }
    }

    return (
        <div className="container">
            <div className="gameScreen">
                <img src={hangman} alt="vaiCurintia :eagle:" />

                <button onClick={startGame} disabled={disabled}>Escolher palavra</button>

                <div className="choosenWord">
                    {
                        hideWord.map((word, index) => {
                            return <div key={index}>
                                <h1 className={color}>
                                    {word.toUpperCase()}
                                </h1>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="keyboardScreen">
                <div className="keyboard">
                    {
                        letters.map((letter, index) => {
                            return <button onClick={() => pickKey(letter)}
                                key={index}
                                disabled={clicked.includes(letter) ? true : false}
                                className={clicked.includes(letter) ? "pressedKey" : "key"}>
                                {letter}
                            </button>
                        })
                    }
                </div>

                <div className="guessWord">
                    Já sei a palavra!

                    <input type="text" placeholder="Escreva aqui..." 
                        onChange={(e) => setInput(e.target.value)} disabled={disabledInput}>                            
                    </input>

                    <button onClick={guessWord} disabled={disabledInput}>
                        Chutar
                    </button>
                </div>
            </div>
        </div>
    )
}