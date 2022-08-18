import React , { Component } from "react";
//Form
import { FaPlus } from 'react-icons/fa'

//tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";

import './Main.css'

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    handleSubmit = (e) => {
        e.preventDefault()

        const { tarefas, index } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if(novaTarefa === '') return
        if(tarefas.indexOf(novaTarefa) !== -1) return

        const novasTarefas = [...tarefas]

        if(index === -1) {
            this.setState({
                tarefas: [...novasTarefas,  novaTarefa],
                novaTarefa : '',
            })
        }else{
            novasTarefas[index] = novaTarefa;
            
            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
            })
        }
    }

    editTask = (e, index) => {
        const { tarefas } = this.state

        this.setState({
            index,
            novaTarefa: tarefas[index],
        })
        return
    }

    deleteTask = (e, index) => {
        const { tarefas } = this.state
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)
        this.setState({
            tarefas: [...novasTarefas]
        })
        return
    }

    inputChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        })
    }

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="Main">
                <h1>Lista de Tarefas </h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input onChange={this.inputChange} type='text' value={novaTarefa}/>
                    <button type='submit'><FaPlus/></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa + ' '}
                            <span>
                                <FaEdit onClick={(e) => this.editTask(e, index)} className="buttonEdit"/>
                                <FaWindowClose onClick={(e) => this.deleteTask(e, index)} className="buttonEdit"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

