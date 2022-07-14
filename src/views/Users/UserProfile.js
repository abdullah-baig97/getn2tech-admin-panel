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

function UserProfile() {
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
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Edit Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>

                                        <Col className="pr-1" md="12">
                                            <Form.Group>
                                                <label>Username</label>
                                                <input type="text" className="form-control" name="username" id="dsc" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />

                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>First Name</label>
                                                <input type="text" className="form-control" name="firstname" id="dsc" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" name="lastname" id="dsc" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Address</label>
                                                <input type="text" className="form-control" name="address" id="dsc" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>City</label>
                                                <input type="text" className="form-control" name="city" id="dsc" placeholder="City" value={city} onChange={(e) => { setCity(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <Form.Group>
                                                <label>Country</label>
                                                <input type="text" className="form-control" name="country" id="dsc" placeholder="Country" value={country} onChange={(e) => { setCountry(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Postal Code</label>
                                                <input type="text" className="form-control" name="postalcode" id="dsc" placeholder="Postal Code" value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1 px-1" md="4">
                                            <label>Date of Birth</label>

                                            <ReactDatePicker
                                                selected={dateOfBirth}
                                                onChange={(date) => setDateOfBirth(date)}
                                                peekNextMonth
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                            />
                                        </Col>
                                    </Row>

                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Update Profile
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">
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

export default UserProfile;
