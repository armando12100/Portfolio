
export default function Card(props) {
    return (
        <div className="card">
            <div className="video-container">
                <video src={props.video} type="video/mp4" className="video" autoPlay loop muted></video>
                {/* <div className="overlay">
                    <div className="css">CSS</div>
                    <div className="react">React</div>
                    <div className="vite">Vite</div>
                    <div className="html">HTML</div>
                    <div className="javascript">Javascript</div>
                </div> */}
            </div>
            <div>
                <p className="card-paragraph">{props.paragraph}</p>
            </div>
            <div className="link-container">
                <a href={props.website} className="card-link">Website Link</a>
                <a href={props.github} className="card-link">Source Code</a>
            </div>
        </div>
    )
}