import { React, useState } from 'react'
import fruitData from '../JSON/fruitData.js'
import Charts from './Charts.jsx'
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai'
// import demo1 from './../Assets/demo1.jpg'
// import demo2 from './../Assets/demo2.jpg'
import './Home.css';
const Home = () => {
    const [fruit1, setFruit1] = useState([])
    const [fruit2, setFruit2] = useState([])
    const [isShown, setIsShown] = useState(false);
    const [mode, setMode] = useState('');

    const getFruitInfo = (fruitName, getValue) => {
        let newGetValue;
        fruitData.forEach((key) => {
            if (key.name === fruitName) {
                newGetValue = key[getValue]
            }
        })
        return newGetValue;
    }
    const setFruitHandler1 = (e) => {
        setFruit1([])
        if (e.target.value === 'Select Fruit') {
            setFruit1([])
            setIsShown(false);
        } else {
            setFruit1([
                e.target.value,
                getFruitInfo(e.target.value, "nutritions"),
                getFruitInfo(e.target.value, "imgUrl"),
                getFruitInfo(e.target.value, "genus"),
                getFruitInfo(e.target.value, "family"),
                getFruitInfo(e.target.value, "order")
            ])
        }
    }

    const setFruitHandler2 = (e) => {
        setFruit2([])
        if (e.target.value === 'Select Fruit') {
            setFruit2([])
            setIsShown(false);
        } else {
            setFruit2([
                e.target.value,
                getFruitInfo(e.target.value, "nutritions"),
                getFruitInfo(e.target.value, "imgUrl"),
                getFruitInfo(e.target.value, "genus"),
                getFruitInfo(e.target.value, "family"),
                getFruitInfo(e.target.value, "order")
            ])
        }
    }
    const barHandleClick = () => {
        setMode('bar')
        setIsShown(true);
    };
    const lineHandleClick = () => {
        setMode('line')
        setIsShown(true);
    };

    return (
        <>
            <div className="container my-4">
                {/* header text  */}
                <div className=" text-center">
                    <h1 className="title">Compare Fruits</h1>
                    <p className="text-muted">
                        Select two fruits to compare Nutritional values
                    </p>
                </div>

                {/* form part  */}
                <form className='d-flex flex-column align-items-center'>

                    <select onChange={setFruitHandler1} className="form-select form-select m-3" aria-label=".form-select-lg example">
                        <option defaultValue={'Select Fruit'}>Select Fruit</option>
                        {fruitData.map((fruit) => {
                            return (
                                <option key={fruit.id} value={fruit.name}>{fruit.name}</option>
                            )
                        })}
                    </select>

                    <select onChange={setFruitHandler2} className="form-select form-select m-3" aria-label=".form-select-lg example">
                        <option defaultValue={'Select Fruit'}>Select Fruit</option>
                        {fruitData.map((fruit) => {
                            return (
                                <option key={fruit.id} value={fruit.name}>{fruit.name}</option>
                            )
                        })}
                    </select>
                    <div id='button-box' className="m-2">
                        <button disabled={(fruit1.length === 0 || fruit2.length === 0) ? true : false} onClick={barHandleClick} style={{ minWidth: '150px' }} className="btn btn-primary mx-2" type="button"><AiOutlineBarChart />&nbsp; Bar Chart</button>

                        <button disabled={(fruit1.length === 0 || fruit2.length === 0) ? true : false} onClick={lineHandleClick} style={{ minWidth: '150px' }} className="btn btn-primary mx-2" type="button"><AiOutlineLineChart />&nbsp; Line Chart</button>

                    </div>
                </form>

                {/* chart part  */}
                {isShown &&
                    <div>
                        <hr />
                        <div id='infoBox' className="d-flex flex-row justify-content-between align-items-center flex-lg-row">
                            <div className="img-box">
                                <h3 className='fruit1-text'>{fruit1[0]}</h3>
                                <div className="semi-box">
                                    <div className="fruit1-semi-text">
                                        <p>Genus : {fruit1[3]}</p>
                                        <p>Family : {fruit1[4]}</p>
                                        <p>Order : {fruit1[5]}</p>
                                    </div>
                                    <img src={fruit1[2]} className="fruitImage" alt="First Fruit" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className='vsText'>VS.</h2>
                            </div>
                            <div className="img-box">
                                <h3 className='fruit2-text'>{fruit2[0]}</h3>
                                <div className="semi-box">
                                    <div className="fruit1-semi-text">
                                        <p>Genus : {fruit2[3]}</p>
                                        <p>Family : {fruit2[4]}</p>
                                        <p>Order : {fruit2[5]}</p>
                                    </div>
                                    <img src={fruit2[2]} className="fruitImage" alt="First Fruit" />
                                </div>
                            </div>
                            {/* <div className="img-box">
                                <h3 className='fruit1-text'>Banana</h3>
                                <div className="semi-box">
                                    <div className="fruit1-semi-text">
                                        <p>Genus : Malus</p>
                                        <p>Family : Rosaceae</p>
                                        <p>Order : Rosales</p>
                                    </div>
                                    <img src={demo1} className="fruitImage" alt="First Fruit" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className='vsText'>VS.</h2>
                            </div>
                            <div className="img-box">
                                <h3 className='fruit2-text'>Grapes</h3>
                                <div className="semi-box">
                                    <div className="fruit2-semi-text">
                                        <p>Genus : Malus</p>
                                        <p>Family : Rosaceae</p>
                                        <p>Order : Rosales</p>
                                    </div>
                                <img src={demo2} className="fruitImage" alt="Second Fruit" />
                                </div>
                            </div> */}
                        </div>
                        <Charts mode={mode} fruit1={fruit1} fruit2={fruit2} />
                    </div>
                }
            </div>
        </>
    )
}

export default Home
