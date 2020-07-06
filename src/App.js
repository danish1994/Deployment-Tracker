import React, {useEffect, useState} from 'react';
import {Github} from "./Github";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {RepoCard} from "./RepoCard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
});

function App() {
    const classes = useStyles();

    const [repos, setRepos] = useState([]);
    useEffect(() => {
        Github.repos('codalien').then((res) => {
            setRepos(res);
        });
    }, [setRepos]);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Deployment Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                {
                    repos.map((repo) => <RepoCard repo={repo}/>)
                }
            </Container>
        </>
    );
}

export default App;
