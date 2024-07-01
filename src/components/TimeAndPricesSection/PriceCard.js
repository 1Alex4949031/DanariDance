import "./PriceCard.css"
import {Col, Container} from "react-bootstrap";
import React from "react";

export const PriceCard = ({title, age, time, days, imgSrc, price, subtextPrice}) => {
    return (
        <Container>
            <Col className="price-card mt-3">
                <Col className="price-info">
                    <div className="price-title-top mx-3">{title}</div>
                    <div className="price-age-top mt-2">{age}</div>
                    <Col className="justify-content-center my-3">
                        <img src={imgSrc} alt="PriceCard" className="img-price"/>
                    </Col>
                </Col>
                <Col className="mx-3">
                    <Col className="price-col-days">
                        <div className="price-title">Когда?</div>
                        <div className="price-days">{days}</div>
                    </Col>
                    <Col className="price-col">
                        <div className="price-title">Во сколько?</div>
                        <div className="price-time">{time}</div>
                    </Col>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Col xs={6} md={6} xl={6} className="price-per-month my-3">
                        <div className="price">{price}</div>
                        <div className="subtext-price">{subtextPrice}</div>
                    </Col>
                </Col>
            </Col>
        </Container>
    );
}