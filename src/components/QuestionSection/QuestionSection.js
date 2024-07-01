import React from "react";
import "./QuestionSection.css";
import {Col, Container, Row} from "react-bootstrap";

export const QuestionSection = () => {
    return (
        <Container>
            <Row className="row-questions justify-content-center">
                <Col xs={12} md={10} xl={10} className="questions">
                    <div className="ellipse-q1"/>
                    <div className="ellipse-q2"/>
                    <div className="rectangle-q1"/>
                    <div className="text-wrapper-q1">Что такое эстрадно-спортивный танец?</div>
                </Col>
            </Row>
        </Container>
    );
};