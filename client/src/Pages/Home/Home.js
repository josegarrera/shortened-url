import React, { useEffect, useState } from 'react'
import CreateUrlForm from './Components/CreateUrlForm';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import ListPages from './Components/ListPages';
import { useGet } from '../../hooks/useGet';
import WithAds from '../../Components/WithAds';

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
    // petición al back para traer las urls existentes
    const [urls, fetching] = useGet('urls');
    console.log(urls);

    const addPage = (page) => {
        setPages([...pages, page])
    }

    useEffect(() => {
        setPages(urls);
    }, []);

    return (
        <Fragment>
            <Grid container justify='center'>
                <Grid item className={classes.mt2} xs={5}>
                    <CreateUrlForm addPage={addPage} />
                </Grid>
            </Grid>
            <Grid container justify='center' className={classes.mt4} >
                <ListPages pages={pages} />
            </Grid>
        </Fragment>
    )
}

export default WithAds(Home);
