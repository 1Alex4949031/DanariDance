import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./Pictures.css";
import danariPng4 from "../../assets/img/danari4.png";
import danariPng5 from "../../assets/img/danari5.png";
import danariPng6 from "../../assets/img/danari6.png";
import danariPng7 from "../../assets/img/danari7.png";
import danariPng8 from "../../assets/img/danari8.png";
import danariPng9 from "../../assets/img/danari9.png";
import danariPng10 from "../../assets/img/danari10.png";
import danariPng11 from "../../assets/img/danari11.png";

const Pictures = () => {
    return (
        <Container>
            <Row className="row-questions justify-content-center">
                <Col xs={12} md={8} xl={10} className="pictures">
                    <div className="ellipse-p1"/>
                    <div className="ellipse-p2"/>
                    <div className="rectangle-p1"/>
                    <div className="text-wrapper-p1">Наши фотографии</div>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng10} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng11} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng8} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng9} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng4} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng5} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng6} alt="DanariDance"/>
                </Col>
                <Col xs={6} md={3} xl={3} className="my-2">
                    <img className="img-girl" src={danariPng7} alt="DanariDance"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Pictures;