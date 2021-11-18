import { useState } from "react"
import { nanoid } from "nanoid"


export function Crud() {

  //estados 
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [indicador, setIndicador] = useState("")
  const [error, setError] = useState(null)

  const addNewTask = (e) => {
    e.preventDefault()
    if (!task.trim()) {
      // alert("el campo esta vacio")
      setError("Escriba una tarea por favor")
      return
    }
    setTasks([...tasks, { id: nanoid(5), newTask: task }])
    setTask("")
    setError(null)
    // tasks.map(i => console.log(i.newTask, i.id))
  }

  const eliminarTarea = (calabaza) => {
    const filteredArray = tasks.filter((item) => item.id !== calabaza)
    setTasks(filteredArray)
  }

  const toEdit = (item) => {
    setEditMode(true)
    console.log(item)
    setTask(item.newTask)
    setIndicador(item.id)

  }

  const editTask = (e) => {
    e.preventDefault()
    if (!task.trim()) {
      // alert("el campo esta vacio")
      setError("Escriba una tarea por favor")
      return
    }


    const editedArray = tasks.map(
      item => item.id === indicador ? { indicador, newTask: task } : item)


    setTasks(editedArray)

    setEditMode(false)
    setTask("")
    setIndicador("")
    setError(null)
    // console.log(task)


  }

  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {/* esto es lo que se va a imprimir con el map */}
            {
              tasks.length !== 0 ? (

                tasks.map((item) => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.newTask}</span>
                    <button
                      className="btn btn-danger btn-sm float-end mx-2"
                      onClick={() => eliminarTarea(item.id)}
                    >Eliminar</button>
                    <button
                      className="btn btn-warning btn-sm float-end"
                      onClick={() => toEdit(item)}

                    >Editar</button>
                  </li>
                ))

              ) : <li className="list-group-item"> No hay tareas </li>
            }

          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">

            {
              editMode ? "Editar tarea" : "Formulario"
            }

          </h4>
          {
            error ? <span className="text-danger"> {error}</span> : " "
          }

          {/* nuestro formulario que consta de un input y un boton  */}
          <form onSubmit={editMode ? editTask : addNewTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="agregar tarea"
              onChange={e => setTask(e.target.value)}
              value={task}
            />
            <div className="d-grid gap-2 ">

              {
                editMode ? <button className="btn btn-warning " type="submit">Editar</button>
                  :
                  <button className="btn btn-dark " type="submit">Agregar</button>
              }

            </div>
          </form>


        </div>

      </div>


    </div>


  )

}