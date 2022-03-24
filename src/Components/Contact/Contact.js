import React from 'react';
import './Contact.css';
import icon1 from "../../img/github.svg"
import icon2 from "../../img/linkedin.svg"


function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contato</h1>
                            <p className="hire__text white">Para entrar em contato comigo:</p>
                            <p className="hire__text white"><strong>
                                <a href="https://api.whatsapp.com/send?phone=5517992238186" target="_blank" rel="noreferrer">(17) 99223-8186</a>
                            </strong> ou email <strong>filipeguto95@gmail.com</strong></p>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/FilipeGuto" target="_blank" rel="noreferrer">
                                <img src={icon1} alt="GitHub" className="github"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/filipeguto/" target="_blank" rel="noreferrer">
                                <img src={icon2} alt="Linkedin" className="linkedin"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
