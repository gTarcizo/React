import React from "react";
import PropTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './tarefas.css'


export default function Tarefas({tarefas, editTask, deleteTask}){
    return(
        <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
                {tarefa + ' '}
                <span>
                    <FaEdit onClick={(e) => editTask(e, index)} className="buttonEdit"/>
                    <FaWindowClose onClick={(e) => deleteTask(e, index)} className="buttonEdit"/>
                </span>
            </li>
        ))}
    </ul>
    )
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}
