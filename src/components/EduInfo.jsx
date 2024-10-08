import './styles/eduInfo.css'

function EduInfo({ school, title, date }) {
    return (
        <section>
            <div className="sectionTitle">
                <h1>Education</h1>
            </div>

            <div className="sectionContent">
                <h2>{title} at {school}</h2>
                <p className="subDetails">{date}</p>
                <p>A brief description of Alan's education.</p>
            </div>
            <div className="clear"></div>
        </section>
    )
}

export default EduInfo