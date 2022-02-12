import React from 'react';
import PropTypes from 'prop-types';
import { Grid, styled, Paper, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './App.css';

function GridInputs({ setTotals }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setTotals(data);
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Item>
                        <TextField
                            autoComplete='off'
                            {...register("homeTotal")}
                            required
                            label="Home Total Points"
                            variant="standard"
                        />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField
                            autoComplete='off'
                            {...register("awayTotal")}
                            required id="setAwayTotal"
                            label="Away Total Points"
                            variant="standard"
                        />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField
                            autoComplete='off'
                            {...register("minutesPlayed")}
                            required
                            id="setMinutesPlayed"
                            label="Minutes Played"
                            variant="standard"
                        />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField
                            autoComplete='off'
                            {...register("currentLine")}
                            id="setCurrentLine"
                            required
                            label="Current Line"
                            variant="standard"
                        />
                    </Item>
                </Grid>
            </Grid>
            <Button sx={{ marginTop: '25px' }} type="submit" variant="contained" color="success">Make Money</Button>
        </form>
    );
}

GridInputs.propTypes = {
    setTotals: PropTypes.func
}
export default GridInputs;
