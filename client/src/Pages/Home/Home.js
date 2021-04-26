import React, { useEffect, useState } from 'react'
import CreateUrlForm from './Components/CreateUrlForm';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    mt2: {
        marginTop: theme.spacing(2),
    },
    mt4: {
        marginTop: theme.spacing(4),
    },

}))

const Home = () => {

    const classes = useStyles();
    const [pages, setPages] = useState([]);

    return (
        <Fragment>
            <Grid container justify='center'>
                <Grid item className={classes.mt2} xs={6}>
                    <CreateUrlForm />
                </Grid>
            </Grid>
            <Grid container justify='center' className={classes.mt4} >

            </Grid>
        </Fragment>
    )
}

export default Home
