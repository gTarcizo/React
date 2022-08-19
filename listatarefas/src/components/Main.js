import React , { Component } from "react";
import Form from './Form'
import Tarefas from './Tarefas'
import './Main.css'
export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };
    componentDidMount(){
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))
        if(!tarefas) return
        this.setState({tarefas})
    }
    componentDidUpdate(prevProps, prevState){
        const { tarefas } =  this.state
        if(tarefas === prevState.tarefas) return
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

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

                <Form
                handleSubmit={this.handleSubmit}
                inputChange={this.inputChange}
                novaTarefa={novaTarefa}
                />

                <Tarefas
                    tarefas={tarefas}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                />
            </div>
        )
    }
}

