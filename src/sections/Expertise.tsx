import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function Expertise() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected();
    }, [selected]);

    const expertiseLinks = [
        {
            name: "ReactJS",
            logo: "/img/reactjs.svg",
            desc: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."
        },
        {
            name: "NextJS",
            logo: "/img/nextjs.svg",
            desc: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
        },
        {
            name: "ViteJS",
            logo: "/img/vitejs.svg",
            desc: "Vite is a build tool created by Evan You, the creator of Vue. It allows for faster development thanks to super fast Hot Module Reload (HMR), fast cold start times, and CSS + JSX + TypeScript support out of the box. Although Vite is opinionated, it can be extended via its Plugin API and JavaScript API."
        },
        {
            name: "NextJS",
            logo: "/img/nextjs.svg",
            desc: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
        },
        {
            name: "NextJS",
            logo: "/img/nextjs.svg",
            desc: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
        },
    ];
    return (
        <motion.div
            className='expertise'
            id='expertise'
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>A dive into our expertise</h2>
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
                        <Image className='exp-logo-img' src={expertiseLinks[selected].logo} alt={expertiseLinks[selected].name} fill />
                    </div>
                    <div className="exp-description">
                        {expertiseLinks[selected].desc}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Expertise