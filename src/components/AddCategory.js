import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handdleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue((e.target.value));
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