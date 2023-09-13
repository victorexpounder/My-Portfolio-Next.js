import React from 'react'

interface Props {
    
}

export const Contact = (props: Props) => {
    return (
        <div>
     
            <div className="inner">
                <div className="flexes">
                <div
                    className="textSec"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="900"
                >
                    <h2>Get In Touch</h2>
                    <h3> Wanna Build Something?</h3>
                    <p>Turn your ideas into reality today, contact me.</p>
                    <a href="mailto:victorexpounder@gmail.com">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 inline mr-1 mb-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                    </svg>
                    <div className="emailtext">victorexpounder@gmail.com</div>
                    </a>
                </div>
                <div
                    className="contact-col"
                    id="contact-col"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <form action="https://formsubmit.co/victorexpounder@gmail.com" method="POST">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter your subject"
                        required
                    />
                    <textarea
                        rows={8}
                        id="message"
                        name="message"
                        placeholder="Message : HI i need a website or web app for my firm."
                        required
                    ></textarea>
                    <button type="submit" className="red-btn">
                        Send message <i className="fas fa-paper-plane"></i>
                    </button>
                    <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
                </div>
            </div>
        
                </div>
    )
}
