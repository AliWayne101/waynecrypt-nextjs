import React from 'react'
import Details from '@/configs/Details';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6
          }}
        >Hi, welcome to</motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.75
          }}
        >
            { Details.webFullName }
        </motion.h2>
        <motion.h3 
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.05
          }}
        >
            Think, Create, Solve
        </motion.h3>
        <motion.p
          className="hero-text"  
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35
          }}
        >
          We’re a software and services company that builds and transforms businesses using advance technologies, data and AI.
        </motion.p>
        <motion.div 
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.65
          }}
        >
            <Button text="Watch Projects" link="/#projects"></Button>
        </motion.div>
    </div>
  )
}

export default Home