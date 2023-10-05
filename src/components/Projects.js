import { Container, Row, Col, Image, Button} from "react-bootstrap"

import projGym from "../assets/projects/gym.png"
import projKopi from "../assets/projects/kopi.png"


const Projects = () => {
    return (
        <div className="projects" id="projects">
            <Container className="container-project">
                <Row>
                <h1>Portofolio</h1>
                    <Col>
                        <Image src={projGym} className="proj-image" rounded />
                    </Col>
                    <Col>
                        <h3>Gym Website <i class="fa-solid fa-dumbbell"></i></h3>
                        <p>Gym Website merupakan sebuah situs yang menampilkan 
                        salah satu bisnis tempat gym dan menampilkan beberapa fasilitas
                        yang disediakan.
                        </p>
                        <Button className="liveBtn1" href="https://naufalnurfauziii.github.io/GymNaufalNur.github.io/">Live Demo <i class="fa-solid fa-link"></i></Button> <Button className="scBtn1" href="https://github.com/NaufalNurFauziii/GymNaufalNur.github.io">Source Code <i class="fa-brands fa-github"></i></Button>
                    </Col>
                </Row>
                <br>
                </br>
                <br>
                </br>
                <Row>
                    <Col className="col-proj2">
                        <h3>Kenangan Senja <i class="fa-solid fa-mug-hot"></i></h3>
                        <p>Kenangan senja merupakan website yang berfokus dalam pemberian informasi
                            mengenai tempat kedai kopi. berisikan menu, deskripsi, kontak kedai yang dapat
                            diakses oleh pelanggan.
                        </p>
                        <Button className="scBtn1" href="https://github.com/NaufalNurFauziii/KopiSenja.github.io">Source Code <i class="fa-brands fa-github"></i></Button> <Button className="liveBtn1" href="https://naufalnurfauziii.github.io/KopiSenja.github.io/">Live Demo <i class="fa-solid fa-link"></i></Button>
                    </Col>
                    <Col>
                        <Image src={projKopi} className="proj-image" rounded/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Projects