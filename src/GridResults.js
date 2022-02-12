import { useForm } from 'react-hook-form';
import { Grid, styled, Paper, TextField, Button } from '@mui/material';
import './App.css';

function GridResults({ results, setTotals }) {
    const { handleSubmit } = useForm();
    const onSubmit = () => {
        setTotals(null);
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
                        <TextField value={results.ptsPerQuarter} readOnly label="Points Per Quarter" variant="standard" />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField value={results.expectedtotal} readOnly label="Expected Total" variant="standard" />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField value={results.expected} readOnly label="Expected" variant="standard" />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <TextField value={results.difference} readOnly label="Expected Difference" variant="standard" />
                    </Item>
                </Grid>
            </Grid>
            <Button sx={{ marginTop: '25px' }} type="submit" variant="contained" color="success">Make Money Again</Button>
        </form>
    );
}

export default GridResults;
