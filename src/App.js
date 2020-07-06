import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Home} from "./Home";
import {Repo} from "./Repo";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
});

function App() {
    const classes = useStyles();

    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Link to={'/'} className={classes.link}>
                        <Typography variant="h6">
                            Deployment Tracker
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>

            <Container className={classes.container}>
                <Switch>
                    <Route path="/repo/:id" render={Repo}/>
                    <Route path="/" render={Home}/>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
