import {Col, Container, Row} from "react-bootstrap";
import "./QuestionPreviewText.css"
import React from "react";
export const QuestionPreviewText = () => {
    return (
        <Container>
            <Row className='row-questions justify-content-center align-items-center'>
                <Col xs={10} md={10} xl={10} className="preview-text">
                    <span className="text">Это совмещение </span>
                    <span className="text-pink">акробатики, гимнастики и хореографии! </span>
                    <span className="text">На наших тренировках мы изучаем все эти направления и представляем номера на международных конкурсах и фестивалях!</span>
                </Col>
            </Row>
        </Container>
    );
}