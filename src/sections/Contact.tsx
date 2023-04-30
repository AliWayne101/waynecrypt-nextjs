import React, { useRef, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { HashLoader } from 'react-spinners';
import Button from '@/components/Button';

function Contact() {
    const fServiceID: string = process.env.NEXT_PUBLIC_EMAIL_SERV!;
    const fTempID: string = process.env.NEXT_PUBLIC_EMAIL_TEMP!;
    const emailJSPublicKey: string = process.env.NEXT_PUBLIC_EMAIL_USER!;

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isSentError, setIsSentError] = useState(false);
    const [sayHi, setSayHi] = useState(true);
    const [saidHi, setSaidHi] = useState(false);

    const _form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (_form.current) {
            setIsSending(true);
            emailjs
                .sendForm(fServiceID, fTempID, _form.current, emailJSPublicKey)
                .then(
                    (result) => {
                        //console.log(result);
                        setIsSending(false);
                        setIsSent(true);
                        if (result.status !== 200) {
                            setIsSentError(true);
                        }
                    },
                    (error) => {
                        //console.log(error);
                        setIsSending(false);
                        setIsSent(true);
                        setIsSentError(true);
                    }
                );
        } else
            console.log('Throwing error');
    }

    const delayTime = () => {
        setSayHi(false);
        setTimeout(() => {
            setSaidHi(true);
        }, 2000);
    }

    return (
        <motion.div
            className="contact"
            id="contact"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <h2 className="contact-title">What&apos;s next?</h2>
            <h2 className="contact-sub-title">Get in touch</h2>

            {
                isSending === true ? (
                    <div className="contact-loading">
                        <HashLoader
                            color='#9d00ff'
                            loading
                            size={150}
                        />
                    </div>
                ) : (
                    isSent === true ? (
                        isSentError === true ? (
                            <>
                                <h2 className="contact-sub-title">Ohh, an error!</h2>
                                <h2 className="contact-loading-desc">It seems we are facing some problems, try sending mail manually!</h2>
                            </>
                        ) : (
                            <>
                                <h2 className="contact-sub-title">Success</h2>
                                <h2 className="contact-loading-desc">We will reach you shortly!</h2>
                            </>
                        )
                    ) : (
                        sayHi === false ? (
                            saidHi === true ? (
                                <>
                                    <p className="contact-text">
                                        Our inbox is always open. Whether you have a question or just want to say Hi, We&apos;ll try our best to get back to you
                                    </p>
                                    <div className="contact-cta">
                                        <form ref={_form} onSubmit={sendEmail}>
                                            <label>Name</label>
                                            <input type="text" name="from_name" required />
                                            <label>Email</label>
                                            <input type="email" name="from_email" required />
                                            <label>Message</label>
                                            <textarea name="message" required />
                                            <input type="submit" value="Send" className='btn' />
                                        </form>
                                    </div>
                                </>
                            ) : (
                                <HashLoader
                                    color='#9d00ff'
                                    loading
                                    size={150}
                                />
                            )
                        ) : (
                            <div className="hero-button">
                                <span onClick={delayTime}><Button text='Say Hi' link='/#contact' /></span>
                            </div>
                        )

                    )
                )
            }
        </motion.div>
    )
}

export default Contact