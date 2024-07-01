import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {useState, useEffect} from "react";
import logo from '../../assets/img/logo.svg';
import vkIcon from '../../assets/img/vk_icon.svg';
import whatsappIcon from '../../assets/img/whatsapp_icon.svg';
import "../NavBar/NavBar.css";

export const NavBar = ({refs}) => {
    const [, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value, ref) => {
        setActiveLink(value);
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
        setNavExpanded(false);
    };

    const handleNavToggle = (expanded) => {
        setNavExpanded(expanded);
    };

    const phoneNumber = "+7(996)380-24-45";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                alert('Номер телефона скопирован в буфер обмена!');
            })
            .catch((err) => {
                console.error('Ошибка копирования: ', err);
            });
    };

    return (
        <Navbar expand="lg" className={navExpanded || scrolled ? "expanded" : ""} onToggle={handleNavToggle}
                expanded={navExpanded}>
            <Container className="navbar-container d-flex align-items-center">
                <Navbar.Brand>
                    <img src={logo} alt="Logo" className='logo'
                         onClick={() => onUpdateActiveLink('home', refs.homeRef)}/>
                </Navbar.Brand>
                <Col>
                    <div className="nav-phone" onClick={copyToClipboard}>
                        {phoneNumber}
                    </div>
                    <div className="fio">
                        Арина Сергеевна Даниленко
                    </div>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            className="navbar-link"
                            onClick={() => onUpdateActiveLink('pictures', refs.picturesRef)}>Фото</Nav.Link>
                        <Nav.Link
                            className="navbar-link"
                            onClick={() => onUpdateActiveLink('prices', refs.pricesRef)}>Цены</Nav.Link>
                        <Nav.Link
                            className="navbar-link"
                            onClick={() => onUpdateActiveLink('place', refs.placeRef)}>Место</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex align-items-center">
                        <div className="social-icon">
                            <a href="https://vk.com/danaridance"><img src={vkIcon} alt="VK Icon"/></a>
                            <a href="https://wa.me/79963802445"><img src={whatsappIcon} alt="WhatsApp Icon"/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
