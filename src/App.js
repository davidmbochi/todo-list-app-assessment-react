import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import TaskList from "./pages/TaskList";
import Header from "./layout/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddTask from "./task/AddTask";
import UpdateTask from "./task/UpdateTask";

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<TaskList/>}/>
                <Route exact path="/addtask" element={<AddTask/>}/>
                <Route exact path="edittask/:id" element={<UpdateTask/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
