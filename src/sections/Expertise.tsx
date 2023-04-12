import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Expertise() {
    const [selected, setSelected] = useState(0);
    
    useEffect(() => {
        const  transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected();
    }, [selected]);

    const expertiseLinks = [{
        name: "ReactJS",
        logo: "/img/reactjs.png",
        desc: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."
    },
    {
        name: "NextJS",
        logo: "/img/nextjs.svg",
        desc: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
    }
    ];
    return (
        <div className='expertise' id='expertise'>
            <div className="title">
                <h2>Area of our expertise</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {
                        expertiseLinks.map((expert, index) => {
                            return (
                                <li key={index}
                                    className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                                    onClick={() => setSelected(index)}
                                >
                                    <span>{expert.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="exp-details">
                    <div className="exp-logo">
                        <Image src={expertiseLinks[selected].logo} alt={expertiseLinks[selected].name} fill />
                    </div>
                    <div className="exp-description">
                        {expertiseLinks[selected].desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise