import {Col, Row, Container, Button} from "react-bootstrap"

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container-contact">
            <h3>Contact Me <i class="fa-regular fa-address-card"></i></h3>
            <br>
            </br>
                <Container className="container-contact-row">
                    <Row>
                        <Col>
                            <Button className="contactBtn" href="mailto:naufalnur7@gmail.com">Email <i class="fa-regular fa-envelope"></i></Button>
                        </Col>
                        <Col>
                            <Button className="contactBtn" href="https://maps.app.goo.gl/1JNQRKbiuKfejNuMA">Lokasi <i class="fa-solid fa-location-arrow"></i></Button>
                        </Col>
                    </Row>
            
                    <br>
                    </br>
                    <Row>
                        <Col>
                            <Button className="contactBtn" href="https://www.instagram.com/naufalnurf__/">Instagram <i class="fa-brands fa-instagram"></i></Button>
                        </Col>
                        <Col>
                            <Button className="contactBtn" href="https://wa.me//62895393911716">Whatssapp <i class="fa-brands fa-whatsapp"></i></Button>
                        </Col>
                    </Row>
                <br>
                </br>
                <Button className="thisscBtn">Source Code Ini <i class="fa-brands fa-github"></i></Button>
                </Container>
            </div>
        </div>
    )
}

export default Contact