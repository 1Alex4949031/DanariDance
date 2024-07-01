import {Col, Container, Row} from "react-bootstrap";
import danariPng1 from "../../assets/img/danari1.png";
import danariPng2 from "../../assets/img/danari2.png";
import danariPng3 from "../../assets/img/danari3.png";
import "../QuestionSection/Answers.css"
import React from "react";

export const Answers = () => {
    return (
        <Container className='container-answers'>
            <Row className='row-answer justify-content-center align-items-center my-3 mx-3'>
                <Col xs={10} md={10} xl={4} className='ans-col my-2'>
                    <img className="img-girl" src={danariPng1} alt="girl1"/>
                </Col>
                <Col xs={10} md={10} xl={7} className='ans-col my-4'>
                    <div className="ans-rectangle-1">
                        <Col className="ans-text">
                            <div className="ans-text-header mt-1">Гимнастика</div>
                            <div className="ans-text-description mt-2">Это направление не классической художественной
                                гимнастики, мы занимаемся растяжкой, постановкой корпуса и изучением различных интересных
                                элементов.
                            </div>
                        </Col>
                    </div>
                    <div className="ans-ellipse-2"/>
                </Col>
            </Row>
            <Row className='row-answer justify-content-center align-items-center my-3 mx-3'>
                <Col xs={10} md={10} xl={7} className='ans-col order-2 order-md-2 order-xl-1 my-4'>
                    <div className="ans-rectangle-1">
                        <Col className="ans-text">
                            <div className="ans-text-header mt-1">Акробатика</div>
                            <div className="ans-text-description mt-2">На занятиях мы изучаем всю базовую
                                акробатику, после
                                освоения этой дисциплины в идеале мы изучаем полетную акробатику которая так сильно
                                нравится нашим детям!Также занимаемся общей физической подготовкой и держим свое тело в
                                форме.
                            </div>
                        </Col>
                    </div>
                    <div className="ans-ellipse-1"/>
                </Col>
                <Col xs={10} md={10} xl={4} className='ans-col order-1 order-md-1 order-xl-2 my-2'>
                    <img className="img-girl" src={danariPng2} alt="girl2"/>
                </Col>
            </Row>
            <Row className='row-answer justify-content-center align-items-center my-3 mx-3'>
                <Col xs={10} md={10} xl={4} className='ans-col order-1 order-sm-2 order-md-1 order-xl-1 my-2'>
                    <img className="img-girl" src={danariPng3} alt="girl1"/>
                </Col>
                <Col xs={10} md={10} xl={7} className='ans-col order-2 order-sm-2 order-md-2 order-xl-2 my-4'>
                    <div className="ans-rectangle-1">
                        <Col className="ans-text">
                            <div className="ans-text-header mt-1">Эстрадная хореография</div>
                            <div className="ans-text-description mt-2">Это не просто заученные движения, а театральная
                                постановка. Он синтезирует различные стили и направления, а именно содержит элементы
                                классического танца, модерн-балета, джаз-танца, фанка и хип-хопа.
                            </div>
                        </Col>
                    </div>
                    <div className="ans-ellipse-3"/>
                </Col>
            </Row>
        </Container>
    );
}