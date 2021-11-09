import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handdleInputChange = (e) => {
        setInputValue((e.target.value));
        console.log('handleInputChange llamado');
    }

    const handdleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <Fragment>
            <form onSubmit = {handdleSubmit}>
                <p>{inputValue}</p>
                <input 
                    type = "text" 
                    value = {inputValue} 
                    onChange ={handdleInputChange}>
                </input>
            </form>
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}