import React from "react";

const Skills = () => {
  const skillData = [
    { icon: "bi-filetype-html", color: "text-danger", name: "HTML" },
    { icon: "bi-filetype-css", color: "text-primary", name: "CSS" },
    { icon: "bi-filetype-js", color: "text-warning", name: "JavaScript" },
    { icon: "bi-filetype-js", color: "text-warning", name: "React.js" },
    { icon: "bi-bootstrap", color: "", customColor: "#a972cb", name: "Bootstrap" },
    { icon: "bi-filetype-php", color: "", customColor: "#8993be", name: "PHP" },
    { icon: "bi-database", color: "text-info", name: "MySQL" },
  ];

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: "#2c2c2c" }}>
      <div className="container">
        <h2 className="text-center mb-5 text-aqua">Skills</h2>
        <div className="row g-4 justify-content-center">
          {skillData.map((skill, index) => (
            <div className="col-md-4 col-lg-3" key={index}>
              <div className="card skill-card text-center bg-dark border-0 shadow-sm">
                <div className="card-body">
                  <i
                    className={`bi ${skill.icon} fs-1 ${skill.color}`}
                    style={{
                      color: skill.customColor ? skill.customColor : "",
                    }}
                  ></i>
                  <h5 className="mt-2 text-white">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
