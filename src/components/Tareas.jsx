import React, { useState } from 'react'


export function Tareas() {

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])

  const agregarNuevaTarea = (e) => {
    e.preventDefault()
    if (!tarea.trim()) {
      alert("el campo esta vacio escriba una tarea")
      return
    }

    setTareas([...tareas, tarea])

    e.target.reset()
    setTarea("")
  }



  return (

    <div>

      <h1 className="text-primary">Lista de tareas</h1>

      <form onSubmit={agregarNuevaTarea}>
        <input type="text"
          className="form-control mb-5 "
          placeholder="ingrese su tarea"
          onChange={(e) => setTarea(e.target.value)}

        />

        <button className="btn btn-success btn-block"


        >Agregar tarea</button>

      </form>

      <hr />

      <ul>
        {
          tareas.map((item, index) => (<li key={index}>{item}</li>))
        }

      </ul>

    </div>




  )



}