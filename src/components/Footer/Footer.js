import React from 'react';
import {Col, Row} from "react-bootstrap";
import YandexMapComponent from "../YandexMapComponent/YandexMapComponent";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <Row className="justify-content-center mx-2 mt-3">
                <Col xs={10} md={10} xl={10} className="justify-content-center align-items-center">
                    <div className="location-title mt-3">
                        Где мы расположены?
                    </div>
                    <div className="location-address my-2 mb-2">
                        Улица Дуси Ковальчук, 179/3, 2 этаж, Новосибирск, 630049
                    </div>
                    <Col className="map-container mb-3">
                        <YandexMapComponent/>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;