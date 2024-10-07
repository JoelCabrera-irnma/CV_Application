import './styles/gralInfo.css'

function GralInfo({ name, email, phone , title }) {
    return (
        <>
            <div className="mainDetails">
                <div id="headshot">
                    <img src="src/assets/headshot.jpg" alt={name} />
                </div>

                <div id="name">
                    <h1 className="quickFade delayTwo">{name}</h1>
                    <h2 className="quickFade delayThree">{title}</h2>
                </div>

                <div id="contactDetails" className="quickFade delayFour">
                    <ul>
                        <li>email: <a href="mailto:email@domain.com">{email}</a></li>
                        <li>tel: <a href="tel:0123456789">{phone}</a></li>
                        <li>website: <a href="http://www.website.com">www.website.com</a></li>
                    </ul>
                </div>
                <div className="clear"></div>
            </div>
        </>

        // <section className="section-gral">
        //     <h1>General Informacion</h1>
        //     <div className="card">{name}</div>
        //     <div className="card">{email}</div>
        //     <div className="card">{phone}</div>
        // </section>
    )
}

export default GralInfo