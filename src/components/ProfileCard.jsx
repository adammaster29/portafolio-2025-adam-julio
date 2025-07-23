// import './Profile.css';
import profileImage from '../assets/img/perfiladam.png'; 

export default function ProfileCard({cambiarPagina}) {
  return (
   <div className="profile-card">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <h1 className="name">Adam Agudelo</h1>
      <p className="profession">Backend & Frontend Developer</p>

      <div className="tech-stack">
        <span className='react'>React.js</span>
        <span className='node'>Node.js</span>
        <span className='JavaScript'>JavaScript</span>
        <span className='GitHub'>GitHub</span>
        <span className='SQLServer'>SQLServer</span>
        <span className='Azure'>Azure</span>
        <span className='CSS'>CSS</span>
        <span className='HTML'>HTML</span>
        <span className='Bootstrap'>Bootstrap</span>
        <span className='Postman'>Postman</span>
      </div>

      <div className="buttons">
        <a href="/cv_adam_jimenez.pdf" className="btn" download>Descargar CV</a>
        <a href="https://tramites.copnia.gov.co/Copnia_Microsite/CertificateOfGoodStanding/WaterMarkmethod?CertificateNumber=031132-0750922%20BLV" className="btn secondary">Tarjeta Profesional</a>
        <a href="/tarjeta-pro" className="btn whatsapp ">Whatsapp</a>
        <a onClick={()=>cambiarPagina(2)} className="btn ">ver proyectos</a>
      </div>
    </div>
  );
}
