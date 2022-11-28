import { React, useState } from 'react'
import fruitData from '../JSON/fruitData.js'
import Charts from './Charts.jsx'
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai'
const Home = () => {
    const [fruit1, setFruit1] = useState([])
    const [fruit2, setFruit2] = useState([])
    const [isShown, setIsShown] = useState(false);
    const [mode, setMode] = useState('');

    const getFruitInfo = (fruitName) => {
        let nutritions;
        fruitData.forEach((key) => {
            if (key.name === fruitName) {
                nutritions = key.nutritions
            }
        })
        return nutritions;
    }

    const setFruitHandler1 = (e) => {
        setFruit1([])
        if (e.target.value === 'Select Fruit') {
            setFruit1([])
            setIsShown(false);
        } else {
            setFruit1([
                e.target.value,
                getFruitInfo(e.target.value)
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
                getFruitInfo(e.target.value)
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
                    <div className="m-2">
                        <button disabled={(fruit1.length === 0 || fruit2.length === 0) ? true : false} onClick={barHandleClick} style={{ minWidth: '150px' }} className="btn btn-primary mx-2" type="button"><AiOutlineBarChart />&nbsp; Bar Chart</button>

                        <button disabled={(fruit1.length === 0 || fruit2.length === 0) ? true : false} onClick={lineHandleClick} style={{ minWidth: '150px' }} className="btn btn-primary mx-2" type="button"><AiOutlineLineChart />&nbsp; Line Chart</button>

                    </div>
                </form>

                {/* chart part  */}
                {isShown &&
                    <div className='mx-1'>
                        <hr />
                        <Charts mode={mode} fruit1={fruit1} fruit2={fruit2} />
                    </div>
                }
            </div>
        </>
    )
}

export default Home
