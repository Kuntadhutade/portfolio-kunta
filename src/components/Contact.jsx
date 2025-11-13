import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#2c2c2c" }}>
      <div className="container">
        <h2 className="text-center mb-5 text-aqua">Contact Me</h2>
        <div className="row gy-4">

          {/* 🔹 Left Side: Contact Form */}
          <div className="col-md-6 text-white">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-info">
                Send Message
              </button>
            </form>
          </div>

          {/* 🔹 Right Side: Contact Details */}
          <div className="col-md-6 text-white">
            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-geo-alt-fill fs-4 me-3 text-aqua"></i>
              <div>
                <strong>Address:</strong>
                <br /> Nanded, Maharashtra, India
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-briefcase-fill fs-4 me-3 text-aqua"></i>
              <div>
                <strong>Freelance:</strong>
                <br /> Available
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-envelope-fill fs-4 me-3 text-aqua"></i>
              <div>
                <strong>Email:</strong>
                <br />
                <a
                  href="https://kuntadhutade@gmail.com"
                  className="text-aqua text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://kuntadhutade@gmail.com
                </a>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-telephone-fill fs-4 me-3 text-aqua"></i>
              <div>
                <strong>Phone:</strong>
                <br /> +91 9356028104
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-linkedin fs-4 me-3 text-aqua"></i>
              <div>
                <strong>LinkedIn:</strong>
                <br />
                <a
                  href="https://linkedin.com/in/kuntadhutade"
                  className="text-aqua text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/kuntadhutade
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
