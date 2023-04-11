import react from "react"
import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Aatiq Afzal
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
               <a href="https://github.com/aatiq1443" id="Profile-Link"> Website Link Channel</a>
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} className="email" />Email
            </button>
            <button className="main--btn btn--linkedin">
                <img src={linkedinLogo} className="linkedin"/> <a href="https://www.linkedin.com/in/aatiq-afzal-803050202/" id="LinkedIn-Hover">LinkedIn</a>
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>Aatiq is a passionate tech enthusiast who likes to build applications and solve complex problems. His passion includes mentoring and exploring new places.</p>
                <h3>Interests</h3>
                <p>Coding and travelling</p>
            </div>

        </div>
    )
}
