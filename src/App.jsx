import { Crud } from "./components/Crud";
import { ListaDeTareas } from "./components/ListaDeTareas";
import { Tareas } from "./components/Tareas";



function App() {
  return (
    <div className="container m-5">
      {/* <Tareas /> */}
      <Crud />
      {/* <ListaDeTareas /> */}
    </div>
  );
}

export default App;
