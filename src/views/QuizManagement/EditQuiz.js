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
function EditQuiz() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

   

    //For Updating quiz questions in db
    const update = () => {
        if (title == "" || description == "") {
            setError(true);
            return;
        }       
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
                                    Quiz Successfully Updated
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

                        
                        <label for="title">Title</label>
                        <input type="text" className="form-control" value={title} name="title" id="title" placeholder="Enter title" onChange={(e) => { setTitle(e.target.value) }} />
                        <label for="dsc">Description</label>
                        <input type="text" className="form-control" value={description} name="description" id="dsc" placeholder="Enter description" onChange={(e) => { setDescription(e.target.value) }} />
                        <Row>
                            <Col md="12">

                                <Button variant="primary" className="text-black float-right my-2 px-4"
                                    onClick={update}>
                                    Update
                                </Button>
                              
                            </Col>
                        </Row>

                      
                     
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default EditQuiz;
