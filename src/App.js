import ToDoList from './ToDoList/ToDoList'
import Clock from './Clock/Clock'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css/dist/css/materialize.css'


function App() {

  return (
    <div className="container">
      <Clock />
      <h1 className="text-center">Todo List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
