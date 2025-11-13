import React from "react";
import PHOTO1 from "../assets/PHOTO1.jpg"; 

function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#121212", paddingTop: "80px" }}
    >
      <div className="container">
        <div className="row align-items-center text-white">
          {/* Left Image Section */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="about-img">
              <img
                src={PHOTO1}
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-md-6">
            <h2 className="mb-3" style={{ color: "#00ffff" }}>
              About Me
            </h2>
            <p>
              My name is <strong>Kunta</strong>. I have completed{" "}
              <strong>MSc in Computer Science</strong>.
              I am a Frontend Developer who loves creating clean, responsive, and
              user-friendly websites. I enjoy learning new technologies and
              turning ideas into reality using code.
            </p>
            <a
              href="#more"
              className="btn mt-3"
              style={{
                backgroundColor: "#00ffff",
                color: "#121212",
                borderRadius: "25px",
                padding: "10px 25px",
                fontWeight: "600",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
