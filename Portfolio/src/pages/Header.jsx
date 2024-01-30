import { Link } from "react-scroll"

export default function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                </div>
                <div className="link-div">
                    <a href="https://github.com/dashboard" className="link">Github</a>
                </div>
                <div>
                    <Link to="projects" spy={true} smooth={true} offset={-25} duration={500}>Projects</Link>
                </div>
                <div>
                    <Link to="contact" spy={true} smooth={true} offset={-26} duration={500}>Contact</Link>
                </div>
            </div>
        </>
    )
}