import React from 'react'
import Link from 'next/link';
import {
    FiGithub,
    FiFacebook,
    FiInstagram
} from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';
import { motion } from 'framer-motion';

function SocialIcons() {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/AliWayne101" },
        { name: "Facebook", icon: <FiFacebook />, link: "https://facebook.com/AlexAmeenWains" },
        { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com/ali.wayne101" },
        { name: "Discord", icon: <RxDiscordLogo />, link: "https://discord.gg/mdEtkabDTS" }
    ];

    return (
        <motion.div 
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.95
            }}
        >
            <ul className='social-icons-list'>
                {
                    socialLinks.map(({ name, icon, link }) => (
                        <li className="social-icons-list-item" key={name} title={name}>
                            <Link href={link} className='social-icons-list-item-link' target="_blank">{icon}</Link>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    )
}

export default SocialIcons