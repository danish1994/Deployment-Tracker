import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
    }
});

export const Loader = ({loading = false}) => {
    const classes = useStyles();
    if (loading) {
        return (
            <div className={classes.loader}>
                <CircularProgress/>
            </div>
        );
    } else {
        return <React.Fragment/>
    }
}
