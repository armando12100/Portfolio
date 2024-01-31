import CardInfo from "./CardInfo";
import Card from "./card";


export default function SecondPage() {
    // Card For Projects //
    const cards = CardInfo.map(item => {
        return (
            <Card
                title={item.title}
                key={item.id}
                paragraph={item.paragraph}
                website={item.websiteLink}
                github={item.githubLink}
                video={item.video}
            />
        )
    })
    return (
        <div className="second-page-container" id="projects">

            <div className="projects-header">
                <h1 className="cards-header">Projects</h1>
            </div>

            <div className="cards-container">
                {cards}
            </div>
        </div>
    )
}