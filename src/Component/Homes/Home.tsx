import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./homes.css";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';



function Home() : JSX.Element {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <div>
      <MDBCarousel>
     <MDBCarouselItem itemId={1}>
    <div className="carousel-item-content">
      <img src='/caroussel/homec1.webp' className='d-block w-100' alt='homec1' />
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
            <div className="cardshop " >
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
              <div className="card p-3 m-2" data-aos="flip-left" >
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



      <div className="homeparttwo">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="./services.webp" alt="service" />
            </div>
            <div className="col-md-7">
              <div className="aboutparagraphe">
              <h4 data-aos="zoom-in">Professional services</h4>
              <p data-aos="zoom-in">KBM Softweb will always act with integrity, and only use the
              very best proven methods for your IT needs.</p>
              <a href="/about">
                  <button
                    data-aos="zoom-in"
                    type="button"
                    className="btn btn-secondary"
                  >
                    Our Values
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      

      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-12">
            <img src="./lets.webp" className="lets" alt="lets" />
          </div>

          <div className="col-md-7" id="pcontact">
            <h4>Connect with us</h4>
            <p>
              If you have a question about our services, or how we <br /> could
              transform your company’s IT infrastructure, do not
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
    </>
  );
}

export default Home;
