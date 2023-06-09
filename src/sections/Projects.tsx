import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';
import { RxDiscordLogo } from "react-icons/rx";

function Projects() {
    const projData = [
        {
            projectImage: "/img/projects/wayneblogs.PNG",
            projectName: "WayneBlogs",
            projectLink: "https://wayneblogs.vercel.app/",
            projectDescription: "Discover a world of ideas, insights, and inspiration with our diverse range of expertly crafted content. From the latest trends to timeless classics, our blog has something for everyone. Join the conversation today and let us guide you on your journey of knowledge and discovery.",
            projectTech: [
                "Node.js",
                "MongoDB",
                "SASS",
                "React",
                "NextJS"
            ],
            projectExternalLinks: [
                {
                    link: "https://github.com/AliWayne101/wayneblogs",
                    icon: <FiGithub />,
                    title: "Github"
                },
                {
                    link: "https://wayneblogs.vercel.app/",
                    icon: <FiExternalLink />,
                    title: "External Link"
                }
            ]
        },
        {
            projectImage: "/img/projects/dExchange.PNG",
            projectName: "dExchange",
            projectLink: "https://d-exchange-wayne.vercel.app/",
            projectDescription: "The next generation dollar exchange, for Pakistani users who are facing problems to convert their PayPal USD in PKR. This website allows them to exchange their money conveniently to their bank accounts. <br /><br /> Current Status: Under Development",
            projectTech: [
                "Node.js",
                "MongoDB",
                "Express",
                "React",
                "Vite.js"
            ],
            projectExternalLinks: [
                {
                    link: "https://github.com/AliWayne101/dExchange",
                    icon: <FiGithub />,
                    title: "Github"
                },
                {
                    link: "https://d-exchange-wayne.vercel.app/",
                    icon: <FiExternalLink />,
                    title: "External Link"
                }
            ]
        },
        {
            projectImage: "/img/projects/axolotl1.png",
            projectName: "Axolotl AI",
            projectLink: "http://waynecrypt.ml/axolotl",
            projectDescription: "Axolotl AI is a discord bot which can answer and solve anything you ask in discord <br /> <br /> Version: Beta",
            projectTech: [
                "Node.js",
                "MongoDB",
                "Express",
                "Discord.js",
                "OpenAI"
            ],
            projectExternalLinks: [
                {
                    link: "https://github.com/AliWayne101/AxolotlAI",
                    icon: <FiGithub />,
                    title: "Github"
                },
                {
                    link: "https://discord.com/api/oauth2/authorize?client_id=1088455984487337994&permissions=8&scope=applications.commands%20bot",
                    icon: <RxDiscordLogo />,
                    title: "Invite to Discord"
                }
            ]
        },
    ];
    return (
        <motion.div
            className='projects'
            id='projects'
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>Things we&apos;ve built</h2>
            </div>
            <div className="projects-container">
                {projData.map(
                    ({
                        projectImage,
                        projectDescription,
                        projectLink,
                        projectExternalLinks,
                        projectName,
                        projectTech
                    }) => {
                        return (
                            <div className="project" key={projectName}>
                                <div className="project-image">
                                    <div className="project-image-overlay"></div>
                                    <div className="project-image-container">
                                        <Image src={`${projectImage}`} fill alt={projectName} quality={100} />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <p className="project-info-overline">Featured Project</p>
                                    <h3 className="project-info-title">{projectName}</h3>
                                    <div className="project-info-description">
                                        <p dangerouslySetInnerHTML={{__html: projectDescription}}></p>
                                    </div>
                                    <ul className="project-info-tech-list">
                                        {
                                            projectTech.map((tech) => (
                                                <li className="project-info-tech-list-item" key={tech}>
                                                    {tech}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="project-info-links">
                                        {
                                            projectExternalLinks.map(({ link, icon, title }, index) => (
                                                link !== "" ? (
                                                    <li className="project-info-links-item" key={index}>
                                                        <a href={link} target="_blank" title={title} rel="noopener noreferrer" className="project-info-links-item-link">
                                                            {icon}
                                                        </a>
                                                    </li>
                                                ) : ("")
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </motion.div>
    );
}

export default Projects