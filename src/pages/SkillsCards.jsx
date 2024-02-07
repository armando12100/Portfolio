
export default function SkillsCard({ image, title }) {
    return (
        <>
            <div className="skills-cards-wrapper">
                <img src={image} alt="" className="skills-image"/>
                <p className="skills-title">{title}</p>
            </div>
        </>
    )
}