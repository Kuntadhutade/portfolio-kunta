import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PHOTO1 from "../assets/PHOTO1.jpg"; 

const Home = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#1e1e1e" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 text-white text-center text-md-start">
            <h1 className="display-4">
              Hi, I'm <span className="text-aqua">Kunta Dhutade</span>
            </h1>
            <p className="lead">Frontend Developer</p>

            <div className="social-icons">
              <a href="#">
                <i className="bi bi-facebook text-aqua me-3"></i>
              </a>
              <a href="#">
                <i className="bi bi-whatsapp text-aqua me-3"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram text-aqua me-3"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin text-aqua"></i>
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <img
              src={PHOTO1}
              alt="PHOTO1"
              className="img-fluid rounded-circle glow-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
