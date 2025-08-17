
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHome } from 'react-icons/fa';
// import imgadam from ''
const ContactSection = ({cambiarPagina}) => {
  return (
    <section className="contact-adam">
      <div className="container">
        <h2 className="heading">Contáctame</h2>
        <div className="card">
          <img src='/img/perfiladam.png' alt="Adam Jiménez" className="profile-pic" />
          <div className="info">
            <h3>Adam Agudelo</h3>
            <p className="profession">Desarrollador Full Stack</p>
            <p>
              <a href='mailto:adam.developer2025@gmail.com'><FaEnvelope /> adam.developer2025@gmail.com</a>
              </p>
              <p>
            <a href='https://wa.me/qr/SFXGN6LCNDNAF1 ' target='_blank'><FaWhatsapp /> +57 3013803583</a>
              </p>
            <div className="socials">
              <a href="https://github.com/adammaster29" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/adammaster29/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="" onClick={()=>cambiarPagina(1)}  rel="noopener noreferrer"><FaHome/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
