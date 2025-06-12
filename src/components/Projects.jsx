import React from "react";
import fs from "../images/FS.png";
import f9 from "../images/F9.jpg";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src={fs} alt="Full Stack Project" />
          <h3>FS Centro de entrenamiento</h3>
          <p>
            <p>
              Sistema dividido en BackOffice y portal para gestión de usuarios y
              profesores. Automatiza asistencias, vencimientos y facturación.
              Hecho con GeneXus 18 (Java), autenticación GAM y MySQL.
            </p>
          </p>
        </div>
        <div className="project-card">
          <img src={f9} alt="F9 Project" />
          <h3>F9</h3>
          <p>
            <p>
              Sistema integral para gestión de gimnasio con socios,
              entrenamientos, pagos y asistencias. Incluye lógica de
              vencimientos y perfiles con autenticación GAM. Desarrollado con
              GeneXus 18 (Java) y base de datos MySQL.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
