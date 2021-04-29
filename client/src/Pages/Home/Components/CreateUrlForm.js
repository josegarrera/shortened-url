import TextField from '@material-ui/core/TextField';
import { types } from '../../../types/index';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const CreateUrlForm = ({ addPage }) => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const [{ value: valueUrl }] = e.target.elements;
        addPage({
            id: 200,
            shortUrl: valueUrl,
            fullUrl: 'Full url 200',
        });
        dispatch({
            type: types.SET_ADD,
            payload: {
                visible: true,
                info: {
                    title: 'Una publicidad',
                    description: 'La descripción de la publicidad',
                },
            },
        });
        e.target.reset();
    };
    
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
};

CreateUrlForm.propTypes = {
    addPage: PropTypes.func.isRequired,
}

export default CreateUrlForm;