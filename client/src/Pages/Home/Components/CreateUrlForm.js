import TextField from '@material-ui/core/TextField';
import { types } from '../../../types/index';
import React from 'react'

const CreateUrlForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const [{ value: valueUrl }] = e.target.elements;
        console.log(valueUrl);
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
                id='add-url'
                label='Enter the url to be shortened'
                name='url'
                fullWidth
            />
        </form>
    )

}

export default CreateUrlForm;