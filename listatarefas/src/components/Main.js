import React , { Component } from "react";

//Form
import { FaPlus } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
    state = {
        novaTarefa: '',
    };

    inputChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        })
    }

    render() {
        const { novaTarefa } = this.state;

        return (
            <div className="Main">
                <h1>Lista de Tarefas </h1>

                <form action="#" className="form">
                    <input onChange={this.inputChange} type='text' value={novaTarefa}/>
                    <button type='submit'><FaPlus/></button>
                </form>
            </div>
        )
    }
}

