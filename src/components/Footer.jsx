import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ isHomePage }) => {
    const textColor = '#ffffff';

    return (
        <footer
            className="footer mt-auto py-4"
            style={{
                backgroundColor:'rgba(0, 0, 0, 0.6)',
                color: textColor,
                fontFamily: 'Segoe UI, sans-serif',
                borderTop: isHomePage ? 'none' : '1px solid #dee2e6'
            }}
        >
            <Container>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <p className="mb-1" style={{ fontSize: '15px' }}>
                            &copy; {new Date().getFullYear()} <strong>BikeXRent</strong>. All rights reserved.
                        </p>
                        <p className="mb-0" style={{ fontSize: '13px' }}>
                            Your trusted partner for easy and reliable bike rentals.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end mt-3 mt-md-0">
                        <p className="mb-1" style={{ fontSize: '14px' }}>
                            Follow us:
                        </p>
                        <div className="d-flex justify-content-md-end gap-3">
                            <a href="#" className="footer-icon" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="footer-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="footer-icon" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="footer-icon" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Footer Custom CSS */}
            <style jsx="true">{`
                .footer-icon {
                    color: ${textColor};
                    font-size: 18px;
                    transition: transform 0.3s ease, color 0.3s ease;
                    text-decoration: none;
                }

                .footer-icon:hover {
                    color: #17a2b8;
                    transform: scale(1.2);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
