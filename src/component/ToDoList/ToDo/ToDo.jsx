import { useState } from "react"
import '../ToDo/ToDo.css'


export const ToDo = ({ item, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);


    const FormEdit = () => {

        const [newItem, setNewItem] = useState(item.tasck);
        const handleSubmit = (e) =>{
            e.preventDefault();
        }

        const handleChange = (e) =>{
            let newValue = e.target.value;
            setNewItem(newValue);
        }

        const handleClickUpdate = () =>{
            setIsEdit(false);
            onUpdate(item.id, newItem);
        }

        return (
            <form className="toDoUpdateForm" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="ToDoInput" 
                    onChange={handleChange} 
                    value={newItem} 
                />
                <button onClick={handleClickUpdate} className="btnUpdate">Update</button>
            </form>
        )
    }

    const ToDoElement = () => {

        return (<div key={item.id} className="toDoInfo">
            {item.tasck}
            <div>
                <button onClick={() => setIsEdit(true)} className="btnEditar">Editar</button>
                <button onClick={() => onDelete(item.id)} className="btnEliminar">Eliminar</button>
            </div>
        </div>)
    }

    return( <div className="toDo">{ isEdit ? <FormEdit /> : <ToDoElement className />}</div>)
}