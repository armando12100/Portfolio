import { Link } from "react-scroll"

export default function Header() {
    return (
        <>
            <div className="header">
                <div>Armando Sanchez</div>
                <div className="link-container">
                    <div>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                    </div>
                    <div>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link>
                    </div>
                    <div>
                        <Link to="projects" spy={true} smooth={true} offset={-19} duration={500}>Projects</Link>
                    </div>
                    <div>
                        <Link to="contact" spy={true} smooth={true} offset={-26} duration={500}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}