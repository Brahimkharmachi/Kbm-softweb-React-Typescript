import { useEffect } from "react";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Service(): JSX.Element {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div>
        <MDBCarousel>
          <MDBCarouselItem itemId={1}>
            <div className="carousel-item-content">
              <img
                src="./caroussel/service.webp"
                className="d-block w-100"
                alt="service"
              />
            </div>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

      <div className="serviceshop">
        <h2> KBM Softweb Shop </h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cardshop ">
              <div className="card p-3 m-2" data-aos="flip-left">
                <a href="/service#softdev">
                  <img
                    src="./card/dev.gif"
                    className="card-img-top"
                    alt="dev"
                  />
                  <p className="mt-3">
                    Software development
                    <br />
                    for Web and Mobile
                  </p>
                </a>
              </div>
              <div className="card p-3 m-2" data-aos="flip-left">
                <a href="/service#softvideo">
                  <img
                    src="./card/editiing.gif"
                    className="card-img-top"
                    alt="editing"
                  />
                  <p className="mt-3">Editing Video</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="softdev">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src="./softdev.webp"
                className="softdev img-fluid"
                alt="softdev"
              />
            </div>
            <div className="col-md-7">
              <div className="bra">
                <h4 data-aos="zoom-in">Software developement</h4>
                <p data-aos="zoom-in">
                  We design, develop, and deliver web and mobile applications
                  bespoke
                  <br /> software solutions for SMEs, enterprise and funded
                  startups.
                  <br />
                  <br />
                  We will be with you every step of the way – from initial
                  planning to delivery and beyond.
                </p>
                <a href="/contact">
                  <button
                    data-aos="zoom-in"
                    type="button"
                    className="btn btn-secondary"
                  >
                    Book a Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="softvideo">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="bra">
                <h4 data-aos="zoom-in">Editing Video</h4>
                <p data-aos="zoom-in">
                  Professional video editing for horizontal videos on platforms
                  <br /> like YouTube and Facebook...
                  <br />
                  <br />
                  professionally edited videos in record time so that you can do
                  literally <br /> anything else!
                </p>
                <a href="/contact">
                  <button
                    data-aos="zoom-in"
                    type="button"
                    className="btn btn-secondary"
                  >
                    Book a Consultation
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="./softvideo.webp"
                className="softvideo img-fluid"
                alt="softvideo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contactservice">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src="./lets.webp" className="lets" alt="lets" />
            </div>

            <div className="col-md-7" id="pcontactservice">
              <h4>Connect with us</h4>
              <p>
                If you have a question about our services, or how we <br />{" "}
                could transform your company’s IT infrastructure, do not
                <br /> hesitate to get in touch with us.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <a href="/contact" className="button">
                Click me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
