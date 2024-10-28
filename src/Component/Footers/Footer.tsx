import { MDBContainer, MDBFooter, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Footer () : JSX.Element {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          

        <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "red" }}
            href="mailto:contact@kbm-softweb.com"
            role="button"
          >
            <MDBIcon fas icon="envelope" />
          </MDBBtn>

          
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#00FF00" }}
            href="https://wa.me/+21693545908"
            role="button"
          >
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>

         

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/company/kbm-softweb"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
           Kbm-softweb.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
