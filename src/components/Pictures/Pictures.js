import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Keyboard} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
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
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                navigation={true}
                keyboard={true}
                modules={[Navigation, Keyboard]}
                className="my-3">
                <SwiperSlide>
                    <img src={danariPng10} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng11} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng8} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng9} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng4} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng5} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng6} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng7} alt="DanariDance"/>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Pictures;
