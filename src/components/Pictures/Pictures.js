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
import danariPng17 from "../../assets/img/danari17.png";
import danariPng18 from "../../assets/img/danari18.png";
import danariPng19 from "../../assets/img/danari19.png";
import danariPng20 from "../../assets/img/danari20.png";
import danariPng21 from "../../assets/img/danari21.png";
import danariPng22 from "../../assets/img/danari22.png";
import danariPng23 from "../../assets/img/danari23.png";
import danariPng24 from "../../assets/img/danari24.png";
import danariPng25 from "../../assets/img/danari25.png";
import danariPng26 from "../../assets/img/danari26.png";
import danariPng27 from "../../assets/img/danari27.png";
import danariPng28 from "../../assets/img/danari28.png";
import danariPng29 from "../../assets/img/danari29.png";

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
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
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
                <SwiperSlide>
                    <img src={danariPng17} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng18} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng19} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng20} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng21} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng22} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng23} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng24} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng25} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng26} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng27} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng28} alt="DanariDance"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={danariPng29} alt="DanariDance"/>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Pictures;
