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
    Form,
} from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

import { Link } from "react-router-dom";
function EditArticle() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [articleImage, setArticleImage] = useState("");

    //For reseting the fields
    const reset = () => {
        setTitle("");
        setDescription("");
        setSuccess(false);
        setError(false);
        setSelectedRating(0);
        setArticleImage("");
    }

    //For setting rating
    const onStarClick = (nextValue, prevValue, name) => {
        setSelectedRating(nextValue);
    }


    //For updating article in db
    const update = () => {
        if (articleImage == "" || selectedRating == 0 || description == "" || title == "") {
            setError(true);
            return;
        }
        reset();
        setSuccess(true);
    }


    const handleImageChange = (e) => {

        e.preventDefault();
        let file = e.target.files[0];
        let size = file.size;
        if (size > 5242880) {
            // displayWarningMessage("File size exceeds", "top-center")
            return;
        }
        if (file.type == "image/png" || file.type == "image/gif" || file.type == "image/jpeg" || file.type == "image/jpg") {

            let formData = new FormData();
            for (var index = 0; index < e.target.files.length; index++) {
                var element = e.target.files[index];
                formData.append('imageFile', element);
            }


            setArticleImage(formData);


            let reader = new FileReader();
            reader.readAsDataURL(file);


        }
        else {
            // displayWarningMessage("Invalid file type", "top-center")
            return;
        }
    };


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
                                    Article Successfully Saved
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

                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" size="lg" accept="image/x-png,image/gif,image/jpeg,image/jpg"
                                onChange={handleImageChange} />
                        </Form.Group>
                        <label for="title">Title</label>
                        <input type="text" className="form-control" value={title} name="title" id="title" placeholder="Enter title" onChange={(e) => { setTitle(e.target.value) }} />
                        <label for="dsc">Description</label>
                        <input type="text" className="form-control" value={description} name="description" id="dsc" placeholder="Enter description" onChange={(e) => { setDescription(e.target.value) }} />
                        <label for="selectratings" className="my-2">Average Rating</label>
                        <div style={{ fontSize: '25px' }}>
                            <StarRatingComponent
                                id="selectratings"
                                name="rate"
                                starCount={5}
                                value={selectedRating}
                                onStarClick={onStarClick}

                            />
                        </div>
                        <Row>
                            <Col md="12">

                                <Button variant="primary" className="text-black float-right my-2 px-4"
                                    onClick={reset}>
                                    Reset
                                </Button>
                                <Button variant="primary" className="text-black float-right my-2 mx-2 px-4"
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

export default EditArticle;
