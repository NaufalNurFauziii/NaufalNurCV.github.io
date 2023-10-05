import {Image} from "react-bootstrap"
import meImage from "../assets/profile/meformal1.jpeg"

const Home = () => {
    return (
        <div className="intro text-center justify-content-center align-item-center" id="home">
            <div className="container">
            <Image src={meImage} alt ="profile" className="profile-image" rounded/>
            <h1>Front-End Developer</h1>
            <p>Hi, Saya Naufal Nur Fauzi, Front End Developer yang berdomisili di Bandung, Indonesia <i class="fa-solid fa-location-dot"></i></p>
            <p className="techstack">Tech Stack | <i class="fa-brands fa-js "></i> <i class="fa-brands fa-html5"></i> <i class="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-react"></i> <i class="fa-brands fa-github"></i></p>
            </div>        
        </div>
    )
}

export default Home