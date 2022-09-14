import React from 'react'
import '../css/FruitInput.css'

export default function FruitInput() {
    function showNames(letters) {

    }

    // async function showFruitNames() {
    //     let apiData = await fetch('https://raw.githubusercontent.com/imhardikdesai/nutritions-meter/master/src/JSON/Fruit%20Nutritions.json')
    //     let jsonData = await apiData.json()
    //     let fruitNames = jsonData.map(fruit => fruit.name)
    //     return fruitNames;
    // }
    // showFruitNames()
    // function alpha() {
    //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     let arr = str.split("");
    //     return arr;
    // }
    // console.log(alpha())

    return (
        <>
            <div className="container">
                <ul className='alphabet'>
                    <li onClick={showNames("A")} className='subAlphabet'>A</li>
                    <li onClick={showNames("B")} className='subAlphabet'>B</li>
                    <li onClick={showNames("C")} className='subAlphabet'>C</li>
                    <li onClick={showNames("D")} className='subAlphabet'>D</li>
                    <li onClick={showNames("E")} className='subAlphabet'>E</li>
                    <li onClick={showNames("F")} className='subAlphabet'>F</li>
                    <li onClick={showNames("G")} className='subAlphabet'>G</li>
                    <li onClick={showNames("H")} className='subAlphabet'>H</li>
                    <li onClick={showNames("I")} className='subAlphabet'>I</li>
                    <li onClick={showNames("J")} className='subAlphabet'>J</li>
                    <li onClick={showNames("K")} className='subAlphabet'>K</li>
                    <li onClick={showNames("L")} className='subAlphabet'>L</li>
                    <li onClick={showNames("M")} className='subAlphabet'>M</li>
                    <li onClick={showNames("N")} className='subAlphabet'>N</li>
                    <li onClick={showNames("O")} className='subAlphabet'>O</li>
                    <li onClick={showNames("P")} className='subAlphabet'>P</li>
                    <li onClick={showNames("Q")} className='subAlphabet'>Q</li>
                    <li onClick={showNames("R")} className='subAlphabet'>R</li>
                    <li onClick={showNames("S")} className='subAlphabet'>S</li>
                    <li onClick={showNames("T")} className='subAlphabet'>T</li>
                    <li onClick={showNames("U")} className='subAlphabet'>U</li>
                    <li onClick={showNames("V")} className='subAlphabet'>V</li>
                    <li onClick={showNames("W")} className='subAlphabet'>W</li>
                    <li onClick={showNames("X")} className='subAlphabet'>X</li>
                    <li onClick={showNames("Y")} className='subAlphabet'>Y</li>
                    <li onClick={showNames("Z")} className='subAlphabet'>Z</li>
                </ul>
                <div className="section-fruit">

                </div>
            </div>
        </>
    )
}
