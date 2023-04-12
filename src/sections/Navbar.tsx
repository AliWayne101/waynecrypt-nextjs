import Link from "next/link";
import React from 'react'
import Logo from "@/components/Logo";
import Button from "@/components/Button";

function Navbar() {
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Expertise", link: "/#expertise" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <nav>
        <div className="wrapper">
            <div className="brand">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="nav-items">
              <ul className="nav-items-list">
                {
                  sectionLinks.map(({ name, link }) => (
                    <li className="nav-items-list-item" key={name}>
                      <Link className="nav-items-list-item-link" href={link}>{name}</Link>
                    </li>
                  ))
                }
              </ul>
              <div className="nav-items-button">
                <Button text="Get Started" link="/" />
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar