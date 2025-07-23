import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard";
const projects = [
  {
    title: "API de Gestión de Usuarios",
    description:
      "CRUD completo con autenticación JWT, Express.js y MongoDB. Soporte para roles de usuario y validaciones.",
    link: "https://github.com/tuusuario/gestion-usuarios-api",
  },
  {
    title: "Sistema de Tareas con SQL Server",
    description:
      "Aplicación backend que gestiona tareas con Node.js, Express y SQL Server. Incluye manejo de sesiones y permisos.",
    link: "https://github.com/tuusuario/tareas-sqlserver",
  },
  {
    title: "API para Inventario de Productos",
    description:
      "Backend con MongoDB y Docker para controlar stock, categorías y logs de cambios. Documentado con Postman.",
    link: "https://github.com/tuusuario/inventario-api",
  },
];

export default function Portfolio() {
  const[paginas,setPaginas] = useState(1);

const cambiarPagina = (num)=>{
 setPaginas(num);
}

  useEffect(() => {
    document.title = "Backend Portfolio | Adalberto Agudelo";
  }, []);

  return (
    <div className="portfolio-container">
      {/* primera pagina  perfil */}
      { paginas === 1 && (
        <ProfileCard cambiarPagina={cambiarPagina}/>
      )

      }
      {/* segunda pagina backend  */}
      {paginas === 2 && (
        <>
    <h1 className="portfolio-title">Proyectos Backend</h1> 

  <div className="projects-grid">
    {projects.map((project, index) => (
      <div key={index} className="card">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-desc">{project.description}</p>
        <a className="card-button" href={project.link} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>
    ))}
  </div>

  <div className="contact-section">
    <p className="contact-label">¿Interesado en trabajar conmigo?</p>
    <a className="contact-email" href="mailto:adam.backend.dev@gmail.com">
      adam.backend.dev@gmail.com
    </a>
    <div>
          <a className="contact-email" onClick={()=>cambiarPagina(3)}>
      Proyectos front end
    </a>
    </div>
  </div>
    </>
      )

      }
  {/* segunda pagina front end  */}
      {paginas === 3 && (
        <>
    <h1 className="portfolio-title">Proyectos Front end</h1> 

  <div className="projects-grid">
    {projects.map((project, index) => (
      <div key={index} className="card">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-desc">{project.description}</p>
        <a className="card-button" href={project.link} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      </div>
    ))}
  </div>

  <div className="contact-section">
    <p className="contact-label">¿Interesado en trabajar conmigo?</p>
    <a className="contact-email" href="mailto:adam.backend.dev@gmail.com">
      adam.backend.dev@gmail.com
    </a>
      <div>
          <a className="contact-email" onClick={()=>cambiarPagina(1)}>
      perfil
    </a>
       <a className="contact-email" onClick={()=>cambiarPagina(2)}>
      proyectos backend
    </a>
    </div>
  </div>
    </>
      )

      }
</div>

  );
}
