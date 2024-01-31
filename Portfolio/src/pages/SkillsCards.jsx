
export default function SkillsCard({ image, title }) {
    return (
        <>
            <div className="skills-cards-wrapper">
                <img src={image} alt="" className="skills-image"/>
                <p>{title}</p>
            </div>
        </>
    )
}