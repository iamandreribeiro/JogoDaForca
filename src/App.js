const image = [
    "./assets/forca0.png",
    "./assets/forca1.png",
    "./assets/forca2.png",
    "./assets/forca3.png",
    "./assets/forca4.png",
    "./assets/forca5.png",
    "./assets/forca6.png"
]

let i = 0;

export default function App() {
    function escolhaPalavra() {
        i++;
        console.log(i);
    }
    
    return (
        <div className="container">
            <div className="gameScreen">
                <img src={image[i]} alt="vaiCurintia 🦅"/>

                <button onClick={escolhaPalavra}>Escolher palavra</button>
            </div>

            <div className="keyboardScreen">
                <div className="upperKeyboard">
                    <button className="key">A</button>
                    <button className="key">B</button>
                    <button className="key">C</button>
                    <button className="key">D</button>
                    <button className="key">E</button>
                    <button className="key">F</button>
                    <button className="key">G</button>
                    <button className="key">H</button>
                    <button className="key">I</button>
                    <button className="key">J</button>
                    <button className="key">K</button>
                    <button className="key">L</button>
                    <button className="key">M</button>
                </div>

                <div className="lowerKeyboard">
                    <button className="key">N</button>
                    <button className="key">O</button>
                    <button className="key">P</button>
                    <button className="key">Q</button>
                    <button className="key">R</button>
                    <button className="key">S</button>
                    <button className="key">T</button>
                    <button className="key">U</button>
                    <button className="key">V</button>
                    <button className="key">W</button>
                    <button className="key">X</button>
                    <button className="key">Y</button>
                    <button className="key">Z</button>
                </div>

                <div className="guessWord">
                    Já sei a palavra!
                    <input type="text" placeholder="Escreva aqui..."></input>
                    <button>Chutar</button>
                </div>
            </div>
        </div>
    )
}