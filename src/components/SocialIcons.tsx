import React from 'react'
import Link from 'next/link';
import {
    FiGithub,
    FiFacebook,
    FiInstagram
} from 'react-icons/fi';

function SocialIcons() {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/AliWayne101" },
        { name: "Facebook", icon: <FiFacebook />, link: "https://facebook.com/AlexAmeenWains" },
        { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com/ali.wayne101" }
    ];

    return (
        <div className="social-icons">
            <ul className='social-icons-list'>
                {
                    socialLinks.map(({ name, icon, link}) => (
                        <li className="social-icons-list-item" key={name} title={name}>
                            <Link href={link} className='social-icons-list-item-link' target="_blank">{icon}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialIcons