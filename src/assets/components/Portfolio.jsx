import { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard";
import Contact from "./ContactSection";

const projects = [
  {
    title: "API de Gestión de Usuarios",
    description:
      "CRUD completo con node.js, Express.js y Sqlserver . endpoint del crud y sus  validaciones, Documentado con Postman y sus prueba con postman.",
    link: "https://github.com/adammaster29/crud-apis-2024",
  },
  {
    title: "Plataforma de  busqueda laboral ",
    description:
      "Aplicación backend  de busqueda laboral con Node.js, Express y SQL Server. Incluye manejo de sesiones , permisos , roles de usuario y validaciones .",
    link: "https://github.com/adammaster29/api-plataforma-trabajos",
  },
  {
    title: "Gestion plataforma de salud",
    description:
      "Backend con sqlserver y express para mostrar datos y agregar ,editar,eliminar datos de plataforma de salud , categorías y logs de cambios. Documentado con Postman.",
    link: "https://github.com/adammaster29/api-plataforma-salud",
  },
];
const fronted = [
  {
    title: "Pokedex - Pokémon",
    description:
      "App con consumo de API de Pokémon, muestra detalles y lista de Pokémon.",
    link: "https://pokemon-card-adam.netlify.app/",
    image: "/img/pokedex.png"
  },
  {
    title: "Clima - Weather App",
    description:
      "App del clima usando API externa. Consulta ciudad y obtiene temperatura.",
    link: "https://app-clima-adam.netlify.app/",
    image: "/img/clima.jpg"
  },
  {
    title: "Blackjack - Juego 21",
    description:
      "Juego interactivo donde el usuario compite contra la máquina para acercarse a 21.",
    link: "https://blackjack-juego-adam.netlify.app/",
    image: "/img/blackjack.png"
  },
  {
    title: "Trivia -  preguntas",
    description:
      "Juego para adivinar respuestas correctas a preguntas aleatorias.",
    link: "https://juego-preguntas-adam.netlify.app/",
    image: "/img/trivia.png"
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
    <div className="portfolio-container  video-container">
 <video autoPlay loop muted className="background-video">
        <source src="/videos/fondo1.mp4" type="video/mp4" />
      
      </video>





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
    <a className="contact-email" href="mailto:adam.developer2025@gmail.com">
     adam.developer2025@gmail.com
    </a>
     <div className="nav-buttons">
  <button onClick={() => cambiarPagina(1)}>Perfil</button>
  <button onClick={() => cambiarPagina(3)}>frontend</button>
  <button onClick={() => cambiarPagina(4)}>Contacto</button>
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
  {fronted.map((project, index) => (
    <div key={index} className="card">
      <img src={project.image} alt={project.title} className="card-image" />
      <h2 className="card-title">{project.title}</h2>
      <p className="card-desc">{project.description}</p>
      <a
        className="card-button"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver proyectos
      </a>
    </div>
  ))}
</div>


  <div className="contact-section">
    <p className="contact-label">¿Interesado en trabajar conmigo?</p>
    <a className="contact-email" href="mailto:adam.developer2025@gmail.com">
      adam.developer2025@gmail.com
    </a>
      <div className="nav-buttons">
  <button onClick={() => cambiarPagina(1)}>Perfil</button>
  <button onClick={() => cambiarPagina(2)}>Backend</button>
  <button onClick={() => cambiarPagina(4)}>Contacto</button>
</div>

  </div>
    </>
      )

      }
      {paginas === 4 &&(
        <Contact cambiarPagina={cambiarPagina}/>
      )

      }
</div>

  );
}
