import aboutImage from "../assets/about/about.jpg"
import {Container, Row, Col, Image, Button} from "react-bootstrap"

const About = () => {
    return (
        <div className="about" id="about" >
            <Container className="container-about ">
                <Row>
                    <Col>
                        <Image src={aboutImage} rounded className="image-about"/>
                    </Col>
                    <Col>
                        <h3>ABOUT ME</h3>
                        <p>Front-end Developer based in Bandung, Indonesia <i class="fa-solid fa-location-dot"></i></p>
                        <p>Saya merupakan Front-End Developer yang memiliki kurang lebih 1 tahun pengalaman, 
                        saya terampil dalam menggunakan HTML, CSS, JavaScript, ReactJS, NodeJS, dan GIT. keahlian saya yaitu
                        membuat tampilan web yang menarik, interaktif, dan juga responsif. saya juga orang yang mudah beradaptasi
                        dan orang yang bisa bekerjasama dalam tim.</p>
                        <Button className="downloadBtn" href="https://drive.google.com/drive/folders/1L66fU3jKZiPB-l-MjG9DHRyTU3UNbsAP?usp=sharing">Download CV</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About

