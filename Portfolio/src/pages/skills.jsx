import { Link } from "react-scroll"
import SkillsInfo from "./SkillsInfo"
import SkillsCard from "./SkillsCards"

export default function Skills() {
    // Card For Skills //
    const cards = SkillsInfo.map(item => {
        return (
            <SkillsCard
                title={item.title}
                key={item.id}
                image={item.image}
            />
        )
    })
    return (
        <div className="skills-container" id="skills">
            <div className="skills-header-container">
                <h1 className="skills-header">Skills</h1>
            </div>
            <div className="modal-container">

                <div>
                    <h3>My Skills & Expertise</h3>
                </div>

                <div>
                    <p className="mantra">Creating, Coding,</p>
                    <p className="mantra">Managing Content</p>
                </div>

                <div className="paragraph-container">
                    <p className="skills-paragraph">I take pride in my versatile skill set, honed
                        through countless hours of self-learning and hands-on experience</p>
                        <Link to="projects" spy={true} smooth={true} offset={-19} duration={500}>
                        <button className="skills-btn">My Projects </button>
                        </Link>
                </div>

                <div className="skills-cards-container">
                    {cards}
                </div>

            </div>
        </div>
    )
}