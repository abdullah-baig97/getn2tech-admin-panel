import React, { useState } from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Modal
} from "react-bootstrap";
import demoimg from '../../assets/img/sidebar-2.jpg'
import { PencilSquare, Trash, Plus } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState([
        {
            id: 1,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        },
        {
            id: 2,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        },
        {
            id: 3,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        },
        {
            id: 4,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        },
        {
            id: 5,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        },
        {
            id: 6,
            image: demoimg,
            fullName: "John wick",
            userName: "Johns@wick.com",
            address: "103 building, near city center, XYZ Country",
            dateOfJoining: "3/2/1990",
        }
    ]);
    const [showModal, setShowModal] = useState(false);

    //For deleting quizes questions
    const deleteArticle = () => {
        setShowModal(false);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Row>
                                    <Col md={6}>
                                        <Card.Title as="h4">Users</Card.Title>
                                    </Col>

                                </Row>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Srno.</th>
                                            <th className="border-0">Image</th>
                                            <th className="border-0">Full Name</th>
                                            <th className="border-0">User Name</th>
                                            <th className="border-0">Address</th>
                                            <th className="border-0">Date of joining</th>
                                            <th className="border-0">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {user.image == "" ? "Nil" : <img
                                                        src={user.image}
                                                        height={70}
                                                        width={70}
                                                        alt="..."
                                                    />}

                                                </td>
                                                <td>
                                                    {user.fullName}
                                                </td>
                                                <td>
                                                    {user.userName}
                                                </td>
                                                <td>
                                                    {user.address}
                                                </td>
                                                <td>
                                                    {user.dateOfJoining}
                                                </td>

                                                <td>
                                                    <Row>
                                                        <Link to={"/users/userprofile/" + user.id}>
                                                            <PencilSquare className="mx-2" style={{ cursor: 'pointer' }} />

                                                        </Link>
                                                     
                                                    </Row>

                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

              
            </Container>
        </>
    );
}

export default Users;
