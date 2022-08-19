import React from "react";
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'
import './form.css'

export default function Form({ inputChange, handleSubmit, novaTarefa}){
    return(
        <form onSubmit={handleSubmit} action="#" className="form">
            <input onChange={inputChange} type='text' value={novaTarefa}/>
            <button type='submit'><FaPlus/></button>
        </form>
    )
}



Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    inputChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}
