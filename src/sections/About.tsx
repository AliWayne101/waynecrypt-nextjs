import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className='about'
      id='about'
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 }
      }}
    >
      <div className="title">
        <h2>About Us</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Welcome to our small company that specializes in building web applications and software for our customers!
          </p>
          <p className="about-grid-info-text">
            We are a team of dedicated and passionate developers who are committed to delivering top-quality software solutions to businesses of all sizes. Our goal is to help our clients streamline their operations, increase productivity, and drive growth through the power of technology.
          </p>
          <p className="about-grid-info-text">
            We take pride in our ability to work closely with our clients to understand their unique needs and tailor our solutions accordingly. Whether you need a custom web application or software development, we have the expertise and experience to deliver results that exceed your expectations.
          </p>
          <p className="about-grid-info-text">
            Our team is comprised of experienced developers, designers, project managers, and QA specialists who work together to ensure that every project we undertake is completed on time, within budget, and to the highest standards of quality. We use the latest tools, technologies, and methodologies to ensure that our solutions are secure, scalable, and reliable.
          </p>
          <p className="about-grid-info-text">
            At our company, we believe in building long-term relationships with our clients. We understand that technology is constantly evolving, and we strive to stay ahead of the curve to ensure that our clients remain competitive in their respective industries.
          </p>
          <p className="about-grid-info-text">
            We take great pride in our work and are dedicated to providing our clients with the best possible service. If you&apos;re looking for a reliable partner to help you with your web application or software development needs, please don&apos;t hesitate to get in touch with us. We&apos;d be happy to discuss your project and provide you with a free consultation.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies We&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Sass</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">Vue.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Express</li>
          </ul>
        </div>
        <div className="about-grid-right-container">
          <div className="about-grid-photo-title">
            <h2>Ali A. Wains</h2> <span className="side-text">CEO & Founder</span>
          </div>
          <div className="about-grid-photo">
            <div className="overlay"></div>
            <div className="overlay-border"></div>
            <div className="about-grid-photo-container">
              <Image src="/aliwains.jpg" alt="Profile" fill />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default About