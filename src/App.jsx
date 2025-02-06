
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const usuario =  [
    {id:Date.now(),nombre:'ADAMS AGUDELO'}]
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

    // editar
    const editarUsuario = (id) => {
      const nuevoNombre = prompt('Nuevo nombre:', persona.find(u => u.id === id)?.nombre.toUpperCase());
      if (nuevoNombre) {
        setPersona(persona.map(u => (u.id === id ? { ...u, nombre: nuevoNombre } : u)));
      }
    };


console.log(controlInput);
  return (
    <div className='App'>
      <h1>Crud react</h1>
        <div className="contenedor-padre">
          <div className="contenedor-input">
          <input value={controlInput}  onChange={e => setControlInput(e.target.value)} type="text" placeholder='Escribir Usuario' />
          <button onClick={agregar}>Agregar</button>
          </div>
          
         {
          persona.length > 0 ? (
            
          
          <div className="mostrarUsuarios">
            {persona.map(usuarios=>(
              <ul key={usuarios.id} className="padre-map">
                {/* <li>I.D {usuarios.id}</li> */}
                <li>{usuarios.nombre.toUpperCase()}</li>
                <button onClick={()=>eliminar(usuarios.id)}>Eliminar</button>
                <button onClick={() => editarUsuario(usuarios.id)}>✏️</button>
              </ul>

            ))  }
          </div>
          ):(  <p>no hay usuarios</p> )}
              </div>

    </div>
  )
}

export default App
