import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import "./TimeAndPrices.css"
import {PriceCard} from "./PriceCard";
import danari12 from "../../assets/img/danari12.png"
import danari13 from "../../assets/img/danari13.png"
import danari14 from "../../assets/img/danari14.png"
import danari15 from "../../assets/img/danari15.png"
import danari16 from "../../assets/img/danari16.png"

export const TimeAndPrices = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={10} xl={10} className="time-and-price">
                    <div className="ellipse-tp1"/>
                    <div className="ellipse-tp2"/>
                    <div className="rectangle-tp1"/>
                    <div className="text-wrapper-tp1">Расписание занятий и цены</div>
                </Col>
                <Row xs={1} md={2} xl={4} className="row-prices">
                    <PriceCard
                        title="Начинающая группа"
                        age="4-7 лет"
                        time="18:00 - 19:00"
                        days="Понедельник, Среда, Пятница"
                        price="4200₽"
                        subtextPrice="в месяц"
                        imgSrc={danari12}
                    />
                    <PriceCard
                        title="Утренние тренировки"
                        age="7-12 лет"
                        time="9:00 - 11:00"
                        days="Понедельник, Среда, Пятница"
                        price="5000₽"
                        subtextPrice="в месяц"
                        imgSrc={danari14}
                    />
                    <PriceCard
                        title="Дневные тренировки"
                        age="7-12 лет"
                        time="16:30 - 18:00"
                        days="Понедельник, Среда, Пятница"
                        price="4500₽"
                        subtextPrice="в месяц"
                        imgSrc={danari13}
                    />
                    <PriceCard
                        title="Вечерние тренировки"
                        age="7-14 лет"
                        time="19:00 - 20:30"
                        days="Понедельник, Среда, Пятница"
                        price="4500₽"
                        subtextPrice="в месяц"
                        imgSrc={danari16}
                    />
                    <PriceCard
                        title="Индивидуальное занятие"
                        age="Любой возраст"
                        time="10:00 - 22:00"
                        days="Вся неделя"
                        price="1300₽"
                        subtextPrice="за час"
                        imgSrc={danari15}
                    />
                </Row>
            </Row>
        </Container>
    );
}