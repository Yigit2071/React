import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css"
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;

    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false)

    }

    return (

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: "1px solid lightgrey", padding: "10px", marginTop: "10px" }}>
            <div>
                {
                    editable ? <input style={{ width: "380px" }} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="todo-input" type="text" /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle onClick={removeTodo} className='todo-icons' />
                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <FaEdit onClick={() => setEditable(true)} className='todo-icons' />
                }


            </div>
        </div>

    )
}

export default Todo