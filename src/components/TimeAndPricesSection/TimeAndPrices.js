import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import "./TimeAndPrices.css"
import {PriceCard} from "./PriceCard";
import danari12 from "../../assets/img/danari12.png"
import danari13 from "../../assets/img/danari13.png"
import danari14 from "../../assets/img/danari14.png"
import danari15 from "../../assets/img/danari15.png"

export const TimeAndPrices = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={10} xl={10} className="time-and-price">
                    <div className="ellipse-tp1"/>
                    <div className="ellipse-tp2"/>
                    <div className="rectangle-tp1"/>
                    <div className="text-wrapper-tp1">Расписание и цены занятий</div>
                </Col>
                <Row xs={1} md={2} xl={4} className="row-prices">
                    <PriceCard
                        title="Начинающая группа"
                        age="4-7 лет"
                        time="17:00 - 18:00"
                        days="Понедельник, Среда, Пятница"
                        price="3800Р"
                        subtextPrice="в месяц"
                        imgSrc={danari12}
                    />
                    <PriceCard
                        title="Продолжающая группа"
                        age="7-11 лет"
                        time="18:00 - 20:00"
                        days="Понедельник, Среда, Пятница"
                        price="4500Р"
                        subtextPrice="в месяц"
                        imgSrc={danari14}
                    />
                    <PriceCard
                        title="Утренняя группа"
                        age="10-14 лет"
                        time="17:00 - 18:00"
                        days="Вторник, Четверг"
                        price="4200Р"
                        subtextPrice="в месяц"
                        imgSrc={danari13}
                    />
                    <PriceCard
                        title="Индивидуальное занятие"
                        age="Любой возраст"
                        time="10:00 - 22:00"
                        days="Вся неделя"
                        price="1200Р"
                        subtextPrice="за тренировку"
                        imgSrc={danari15}
                    />
                </Row>
            </Row>
        </Container>
    );
}