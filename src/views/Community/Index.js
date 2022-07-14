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
function Community() {
    const [community, setCommunity] = useState([
        {
            id: 1,
            image: demoimg,
            username: "Johns",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 3,
        },
        {
            id: 2,
            image: demoimg,
            username: "Ibrahim",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 6,
        },
        {
            id: 3,
            image: demoimg,
            username: "Megan",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 10,
        },
        {
            id: 4,
            image: demoimg,
            username: "Ali",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 1,
        },
        {
            id: 5,
            image: demoimg,
            username: "Brian",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 2,
        },
        {
            id: 6,
            image: demoimg,
            username: "Abdullah",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design",
            totalComments: 0,
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
                                        <Card.Title as="h4">Community</Card.Title>
                                    </Col>
                                 
                                </Row>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Srno.</th>
                                            <th className="border-0">Image</th>
                                            <th className="border-0">User Name</th>
                                            <th className="border-0">Description</th>
                                            <th className="border-0">Total Comments</th>
                                            <th className="border-0">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {community.map((comm, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {comm.image == "" ? "Nil" : <img
                                                        src={comm.image}
                                                        height={70}
                                                        width={70}
                                                        alt="..."
                                                    />}

                                                </td>
                                                <td>
                                                    {comm.username}
                                                </td>
                                                <td>
                                                    {comm.description}
                                                </td>
                                                <td>
                                                    {comm.totalComments}
                                                </td>
                                              
                                                <td>
                                                    <Row>
                                                        <Link to={"/community/communitydetails/" + comm.id}>
                                                            <PencilSquare className="mx-2" style={{ cursor: 'pointer' }} />

                                                        </Link>
                                                        {/* <Link>
                                                            <Trash style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)} />
                                                        </Link> */}
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

export default Community;
