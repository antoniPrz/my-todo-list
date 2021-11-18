import { useState } from "react"


export function ListaDeTareas() {

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])


  const agregarNuevaTarea = (evento) => {
    evento.preventDefault()

    setTareas([...tareas, tarea])

    setTarea("")
  }

  const eliminarTarea = (index) => {

    const arrayFiltrado = tareas.filter((item, indice) => indice !== index)
    setTareas(arrayFiltrado)
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={agregarNuevaTarea}>
        <input
          type="text"
          placeholder="agregar tareas"
          onChange={(evento) => setTarea(evento.target.value)}
          value={tarea}
        />

        <button type="submit">Agregar tarea</button>

      </form>


      <ul>
        {
          tareas.map((item, index) => (<li key={index}>
            {item}
            <button
              className="m-3"
              onClick={() => eliminarTarea(index)}
            >x</button>

          </li>))
        }
      </ul>
    </div>
  )
}