import React, { useState } from "react";

// react-bootstrap components
import {
    Button,
    Card,
    
    Table,
    Container,
    Row,
    Col,
    Alert,
} from "react-bootstrap";

import { Link } from "react-router-dom";
function AddQuiz() {
    const [quizzes, setQuizzes] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [saveError, setSaveError] = useState(false);

    //For reseting the fields
    const reset = () => {
        setTitle("");
        setDescription("");
    }

    //For adding quiz questions and preparing array to save in db
    const add = () => {
        if (title == "" || description == "") {
            setError(true);
            return;
        }
        let temp = quizzes;
        temp.push({ title: title, description: description });
        reset();
    }

    //For saving quiz questions in db
    const save = () => {
        if (quizzes == []) {
            setSaveError(true);
            return;
        }
        reset();
        setSuccess(true);
    }
    return (
        <>
            <Container fluid>
                <Row>

                    <Col md="12">
                        {success &&
                            <Alert variant="success">
                                <button
                                    aria-hidden={true}
                                    className="close"
                                    data-dismiss="alert"
                                    type="button"
                                    onClick={() => { setSuccess(false) }}
                                >
                                    <i className="nc-icon nc-simple-remove"></i>
                                </button>
                                <span>
                                    <b>Success - </b>
                                    Quiz Successfully Saved
                                </span>
                            </Alert>
                        }
                        {error &&
                            <Alert variant="warning">
                                <button
                                    aria-hidden={true}
                                    className="close"
                                    data-dismiss="alert"
                                    type="button"
                                    onClick={() => { setError(false) }}
                                >
                                    <i className="nc-icon nc-simple-remove"></i>
                                </button>
                                <span>
                                    <b>Warning - </b>
                                    Input fields are empty
                                </span>
                            </Alert>
                        }

                        {saveError &&
                            <Alert variant="warning">
                                <button
                                    aria-hidden={true}
                                    className="close"
                                    data-dismiss="alert"
                                    type="button"
                                    onClick={() => { setSaveError(false) }}
                                >
                                    <i className="nc-icon nc-simple-remove"></i>
                                </button>
                                <span>
                                    <b>Warning - </b>
                                    Please add some data first
                                </span>
                            </Alert>
                        }
                        <label for="title">Title</label>
                        <input type="text" className="form-control" value={title} name="title" id="title" placeholder="Enter title" onChange={(e) => { setTitle(e.target.value) }} />
                        <label for="dsc">Description</label>
                        <input type="text" className="form-control" value={description} name="description" id="dsc" placeholder="Enter description" onChange={(e) => { setDescription(e.target.value) }} />
                        <Row>
                            <Col md="12">

                                <Button variant="primary" className="text-black float-right my-2 px-4"
                                    onClick={reset}>
                                    Reset
                                </Button>
                                <Button variant="primary" className="text-black float-right my-2 mx-2 px-4"
                                    onClick={add}>
                                    Add
                                </Button>
                            </Col>
                        </Row>

                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>

                                <Card.Title as="h4">Quizzes</Card.Title>

                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Srno.</th>
                                            <th className="border-0">Title</th>
                                            <th className="border-0">Description</th>

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

                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col md="12">

                                <Button variant="primary" className="text-black float-right my-2 px-4"
                                    onClick={save}>
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default AddQuiz;
