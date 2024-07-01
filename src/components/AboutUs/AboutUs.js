import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import "./AboutUs.css"
import plus from "../../assets/img/plus.svg"

export const AboutUs = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={10} xl={10} className="about-us">
                    <div className="ellipse-u1"/>
                    <div className="ellipse-u2"/>
                    <div className="rectangle-u1"/>
                    <p className="text-wrapper-u1">
                        <span className="span-u1">Почему родители выбирают </span>
                        <span className="text-wrapper-u2">DANARI</span>
                        <span className="span-u1"> ?</span>
                    </p>
                </Col>
            </Row>
            <Col>
                <Row className="justify-content-center align-items-center">
                    <img className="image-fixed" src={plus} alt="Plus"/>
                    <Col xs={8} md={8} xl={8}  className="plus">
                        <div className="rectangle-plus1n1"/>
                        <div className="text-wrapper-plus1n1">Авторская программа обучения</div>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <img className="image-fixed" src={plus} alt="Plus"/>
                    <Col xs={8} md={8} xl={8}   className="plus">
                        <div className="rectangle-plus1n1"/>
                        <div className="text-wrapper-plus1n1">Небольшие группы разного уровня подготовки</div>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <img className="image-fixed" src={plus} alt="Plus"/>
                    <Col xs={8} md={8} xl={8}  className="plus">
                        <div className="rectangle-plus1n1"/>
                        <div className="text-wrapper-plus1n1">Педагоги с высшим образованием</div>
                    </Col>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <img className="image-fixed" src={plus} alt="Plus"/>
                    <Col xs={8} md={8} xl={8}  className="plus">
                        <div className="rectangle-plus1n1"/>
                        <div className="text-wrapper-plus1n1">Индивидуальный подход</div>
                    </Col>
                </Row>

            </Col>
        </Container>
    );
}