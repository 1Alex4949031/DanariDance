import React from "react";
import "./BannerSchoolInfo.css";
import children from "../../assets/img/children.png";
import {Col, Container, Row} from "react-bootstrap";


export const BannerSchoolInfo = () => {
    return (
        <Container className="banner">
            <Row className="row-banner">
                <Col xs={10} md={9} xl={5}
                     className="text-rectangle order-2 order-md-2 order-xl-1 my-2">
                    <div className="ellipse"/>
                    <div className="rectangle">
                        <Col className="banner-text">
                            <div className="text-wrapper">Детская школа танцев</div>
                            <div className="inside-text mt-2">
                                <span className="span">Наша школа представляет </span>
                                <span className="text-wrapper-2">уникальное</span>
                                <span className="span"> направление в нашем городе! Эстрадно-спортивный танец!</span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col
                    xs={11} md={8} xl={6} className="children order-1 order-md-1 order-xl-2 my-2">
                    <img src={children} alt='Sphere'/>
                </Col>
            </Row>
        </Container>
    );
};