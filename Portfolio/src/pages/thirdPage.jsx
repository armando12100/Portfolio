import bitjomi from "../images/bitmoji.jpg"
import email from "../icons/gmail.png"
import phone from "../icons/telephone.png"
import linkedin from "../icons/linkedin.png"

export default function ThirdPage() {

    return (
        <div className="third-page-container" id="contact">
            <div>
                <h1 className="contact-header">Contact Me</h1>
            </div>
            <div className="contact-modal">

                <div className="contact-container">
                    <div className="contact-flex">
                        <img src={email} alt="" className="contact-icons" />
                        <h2>asan5900@gmail.com</h2>
                    </div>
                    <div className="contact-flex">
                        <img src={phone} alt="" className="contact-icons" />
                        <h2>(909) 247-6124</h2>
                    </div>
                    <div className="contact-flex">
                        <img src={linkedin} alt="" className="contact-icons" />
                        <a href="https://www.linkedin.com/in/armando-sanchez-3067761a7/">
                            <button className="link-btn">Linked In</button>
                        </a>
                    </div>
                </div>

                <div className="bitmoji-container">
                    <img src={bitjomi} alt="" className="bitmoji" />
                </div>

            </div>
        </div>

    )
}