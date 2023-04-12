import React from 'react'
import Details from '@/configs/Details';
import Button from '@/components/Button';

function Home() {
  return (
    <div className="hero">
        <h1 className="hero-title">Hi, welcome to</h1>
        <h2 className="hero-title-large">
            { Details.webName }
        </h2>
        <h3 className="hero-title-large hero-title-sub">
            Think, Create, Solve
        </h3>
        <p className="hero-text">
        We’re a software and services company that builds and transforms businesses using advance technologies, data and AI.
        </p>
        <div className="hero-button">
            <Button text="Watch Projects" link="#/projects"></Button>
        </div>
    </div>
  )
}

export default Home