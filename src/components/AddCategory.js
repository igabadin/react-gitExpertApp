import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias, categories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(e);
        setCategorias([e.target[0].value],...categories)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />


            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
