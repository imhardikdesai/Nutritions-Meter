import React from 'react'
import ChartLogo from '../Assets/ChartLogo.png'

export default function About() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <img style={{ height: "auto", width: '100%', maxHeight: '450px', maxWidth: '450px' }} src={ChartLogo} alt="logo" />
                <div className="my-1">
                    <h1 className='py-2 card-title'>What is NutroMeter?</h1>
                    <p className='card-text'>An website which compare two fruits Nutrition Data in Different type of Charts.</p>
                    <p className='card-text'>Nutrition, storage and handling information on a variety of fruits and vegetables. One look and you’ll see that eating a colorful variety of fruits and veggies provides a wide range of valuable nutrients.</p>
                </div>
            </div>
        </>
    )
}
