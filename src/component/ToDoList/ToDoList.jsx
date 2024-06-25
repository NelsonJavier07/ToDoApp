import { useState } from "react";
import { ToDo } from './ToDo/ToDo.jsx';
import { v4 as uuidv4 } from 'uuid';
//import '../ToDoList/ToDoList.css'
import '../../component/ToDoList/ToDoList.css'

export const ToDoList = () =>{
    const [tasck, setTasck] = useState("");
    const [toDo, setToDo] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();

            const newToDo = {
                id: uuidv4(),
                tasck: tasck,
                completed: false
            }

            tasck !== '' ? setToDo([...toDo, newToDo]) : null //agrega el nuevo elemento ademas copia todo el listado anterior
            setTasck(''); // Limpia el campo una ves creada la tarea.
        };
        
    const handleChange = (event) =>{
        const doTasck = event.target.value
        setTasck(doTasck);
    };

    const onUpdate = (id, value) =>{
        const temp = [...toDo];
        const item = temp.find( item => item.id === id);
        item.tasck = value
        setTasck(temp);
        setTasck(""); //Limpia el campo de input
    }

    const  handleDelete = (id) =>{
        const temp = toDo.filter( item => item.id != id);
        setToDo(temp)
    }

    return(
        <div className="container"  >
            <form onSubmit={handleSubmit}>
                <input type="text" value={tasck} onChange={handleChange} className="toDoInput"/>
                <button type="submit" onClick={handleSubmit} className="btnCrear">Crear</button>
            </form>
            <div className="containerTasck">
                {toDo.map((item) => (
                    <ToDo 
                        key={ item.id } 
                        item={ item } 
                        onUpdate={onUpdate} 
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}