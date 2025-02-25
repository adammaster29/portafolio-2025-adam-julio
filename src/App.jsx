
import { useEffect, useState } from 'react'
import './App.css'

//git config --global user.name "TuNombre"
//git config --global user.email "tuemail@ejemplo.com"

function App() {
  const usuario =  [
    {id:Date.now(),nombre:'Adams Agudelo'}]
  const[persona,setPersona] = useState(usuario)
  const[controlInput,setControlInput] = useState('')
  // agregar
    const agregar =()=>{
      if (controlInput.trim() === '') {
        alert('campos vacios')
      }else{
        const nuevoUsuario = {id:Date.now(),nombre:controlInput}
        setPersona([...persona,nuevoUsuario])
        setControlInput('')
      }
    }
    // eliminar
    const eliminar =(id)=>{
      setPersona(persona.filter(personas=> personas.id !== id))
    }

    
  // nuevos estados - editandoId,nombreEditado,mostrarModal
  const[editandoId,setEditandoId] = useState(null);
  const[nombreEditado,setNombreEditado] = useState('');
  const[mostrarModal,setMostrarModal] = useState(false);

     // Mostrar modal con los datos del usuario a editar
 const abrirModal = (id, nombre) => {
  setEditandoId(id);
  setNombreEditado(nombre);
  setMostrarModal(true);
 }
 const guardarEdicion =()=>{
  const editado = persona.map(u =>u.id === editandoId ? {...u,nombre:nombreEditado}:u)
  setPersona(editado);
  setEditandoId(null);
  setNombreEditado('');
  setMostrarModal(false);
 }
    
     



  


console.log(controlInput);
  return (
    <div className='App'>
      <h1>Crud react</h1>
        <div className="contenedor-padre">
          <div className="contenedor-input">
          <input value={controlInput}  onChange={e => setControlInput(e.target.value)} type="text" placeholder='Escribir Usuario' />
          <button className='btn-input' onClick={agregar}>Agregar</button>
          </div>
          
         {
          persona.length > 0 ? (
            
          
          <div className="mostrarUsuarios">
            {persona.map(usuarios=>(
              <ul key={usuarios.id} className="padre-map">
                {/* <li>I.D {usuarios.id}</li> */}
               <li> {usuarios.nombre}</li>
                <i className='bx bxs-edit-alt bx-tada bx-rotate-270 editar' onClick={() => abrirModal(usuarios.id, usuarios.nombre)} ></i>
                <i class='bx bx-x bx-tada bx-rotate-270 eliminar' onClick={()=>eliminar(usuarios.id)} ></i>
               
              </ul>

            ))  }
          </div>
          ):(  <p>no hay usuarios</p> )}
              </div>
              {/* Modal para editar */}
      {mostrarModal && (
        <div className="modal">
            <h3>Editar Usuario</h3>
          <div className="modal-contenido">
            <input
              value={nombreEditado}
              onChange={(e) => setNombreEditado(e.target.value)}
              type="text"
            />
            <button  onClick={guardarEdicion}>Guardar</button>
            <button className='eliminar' onClick={() => setMostrarModal(false)}>Cancelar</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
