import React from 'react'
import ChartLogo from '../Assets/ChartLogo.png'

export default function Testonomial() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-4 py-15 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={ChartLogo} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center align-items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Project</h1>
                    <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium, dicta odit consequuntur ipsam obcaecati! Autem excepturi voluptatibus minima maxime</p>
                    {/* <div className="flex justify-center">
                        <button className="btn ml-4 inline-flex py-2 px-6 rounded " style={{ backgroundColor: "#D36B00", color: "white" }}>
                            Bootstrap
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
