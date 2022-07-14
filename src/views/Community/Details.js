import React, { useState } from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CommunityDetails() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());


    return (
        <>
            <Container fluid>
                <Row>
                    
                    <Col md="12">
                        <Card className="card-user">
                            <div className="card-image">

                            </div>
                            <Card.Body>
                                <div className="author">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/faces/face-3.jpg").default}
                                        ></img>
                                        <h5 className="title">Mike Andrew</h5>
                                    </a>
                                    <p className="description">michael24</p>
                                </div>

                            </Card.Body>
                            <hr></hr>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CommunityDetails;
