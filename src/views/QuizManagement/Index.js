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

import { PencilSquare, Trash, Plus } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
function QuizManagement() {
    const [quizzes, setQuizzes] = useState([
        {
            id: 1,
            title: "As a designers, whats been the majority of work you've done? *",
            description: "Example: Product design, Web design, flyer design, social media design, packaging design"
        },
        {
            id: 2,
            title: "Whats the type of work you enjoing doing the most? *",
            description: "Example: I love doing web design but I prefer it with print & social design so I can avoid burning out. Generally, I think I'm a jack of all trades, and would rather keep it that way"
        },
        {
            id: 3,
            title: "Do you have experience preparing captions/ website copy/ ghostwriting ? *",
            description: "Any sort of creating writing really. If you do, Please elaborate on that here /n this isn't absolutely necessary, but English fluency is quite important to us."
        },
        {
            id: 4,
            title: "Please share a portfolio of your creative work here",
            description: "Example creative: products, websites, social media posts, display ads,brochures, promotional items, etc."
        },
        {
            id: 5,
            title: "What is your current availibility? *",
            description: ""
        },
        {
            id: 6,
            title: "Where are you based out of? *",
            description: "Austing, Denver, Miami, Las Pinas, Dhaka-our team is global literally"
        }
    ]);
    const [showModal, setShowModal] = useState(false);

    //For deleting quizes questions
    const deleteQuiz = () => {
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
                                        <Card.Title as="h4">Quizzes</Card.Title>
                                    </Col>
                                    <Col md={6}>
                                        <Link to="/quizmanagement/addquiz" className="btn btn-primary float-right"><Plus size={20} />Add Quiz</Link>

                                    </Col>
                                    {/* <p className="card-category">
                                    Here is a subtitle for this table
                                </p> */}
                                </Row>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Srno.</th>
                                            <th className="border-0">Title</th>
                                            <th className="border-0">Description</th>
                                            <th className="border-0">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizzes.map((quiz, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {quiz.title}
                                                </td>
                                                <td>
                                                    {quiz.description}
                                                </td>
                                                <td>
                                                    <Row>
                                                        <Link to={"/quizmanagement/editquiz/" + quiz.id}>
                                                            <PencilSquare className="mx-2" style={{ cursor: 'pointer' }} />

                                                        </Link>
                                                        <Link>
                                                            <Trash style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)} />
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

                {/* Mini Modal */}
                <Modal
                    className="modal-mini modal-primary"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                >

                    <Modal.Body className="text-center">
                        <p>Delete this quiz</p>
                    </Modal.Body>
                    <div className="modal-footer">
                        <Button
                            className="btn-simple"
                            type="button"
                            variant="link"
                            onClick={deleteQuiz}
                        >
                            Yes
                        </Button>
                        <Button
                            className="btn-simple"
                            type="button"
                            variant="link"
                            onClick={() => setShowModal(false)}
                        >
                            No
                        </Button>
                    </div>
                </Modal>
                {/* End Modal */}
            </Container>
        </>
    );
}

export default QuizManagement;
