import "./contacts.css";
import { useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "aos/dist/aos.css";
import Card from "react-bootstrap/Card";
import Aos from "aos";

function Contact() : JSX.Element {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div>
        <MDBCarousel>
          <MDBCarouselItem itemId={1}>
            <div className="carousel-item-content">
              <img
                src="./caroussel/contact.webp"
                className="d-block w-100"
                alt="contact"
              />
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

      <div className="chose">
        <h2>Contact Us</h2>
        <p>
          If you would like to book a consultation, or have any questions about
          our services, please get in touch and one of our friendly, <br />
          professional advisors will be happy to help.
        </p>
      </div>

      <div>
        <div className="card-container">
          <a href="mailto:contact@kbm-softweb.com" className="card-link">
            <Card className="contact-card" data-aos="flip-left">
              <div className="icon-container">
                <i
                  className="fa fa-envelope text-blue fa-3x"
                  aria-hidden="true"
                  style={{ color: "#04ABCC" }}
                ></i>
              </div>
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ color: "#13243f" }}>
                  contact@kbm-softweb.com
                </Card.Title>
              </Card.Body>
            </Card>
          </a>

          <a href="https://wa.me/21693545908" className="card-link">
            <Card className="contact-card" data-aos="flip-left">
              <div className="icon-container">
                <i
                  className="fab fa-whatsapp text-blue fa-3x"
                  style={{ color: "#04ABCC" }}
                ></i>
              </div>
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ color: "#13243f" }}>
                  +216 93 545 908
                </Card.Title>
              </Card.Body>
            </Card>
          </a>

          <a
            href="https://www.linkedin.com/company/kbm-softweb"
            className="card-link"
          >
            <Card className="contact-card" data-aos="flip-left">
              <div className="icon-container">
                <i
                  className="fab fa-linkedin text-blue fa-3x"
                  style={{ color: "#04ABCC" }}
                ></i>
              </div>
              <Card.Body style={{ flex: 1 }}>
                <Card.Title style={{ color: "#13243f" }}>
                  linkedin/company/kbm-softweb
                </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
