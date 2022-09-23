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

const images = [img0, img1, img2, img3, img4, img5, img6];

const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let i = 0;

export default function App() {
    const [disabled, setDisabled] = useState(false);
    const [disabledInput, setDisabledInput] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [hangman, setHangman] = useState(images[i]);

    return (
        <div className="container">
            <div className="gameScreen">
                <img src={hangman} alt="vaiCurintia 🦅" />

                <button disabled={disabled}>Escolher palavra</button>
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
                    <input type="text" placeholder="Escreva aqui..." disabled={disabledInput}></input>
                    <button>Chutar</button>
                </div>
            </div>
        </div>
    )
}