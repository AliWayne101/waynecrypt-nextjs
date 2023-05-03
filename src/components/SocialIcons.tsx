import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '@/configs/Details';

function SocialIcons() {
    

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