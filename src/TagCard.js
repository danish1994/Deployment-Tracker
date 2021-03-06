import React from 'react'
import {Link} from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        flex: 1,
        flexBasis: '20%',
        margin: 5
    },
    title: {
        fontSize: 16,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    }
});

export const TagCard = (props) => {
    const classes = useStyles();
    const {tags, tagName} = props;
    console.log(tags, tagName)
    return <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
                {/*{name}*/}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
                Last Commit
                <br/>
                {/*{moment(pushed_at).format('hh:mm a - DD/MM/YYYY')}*/}
            </Typography>
        </CardContent>
        {
            <CardActions className={classes.buttons}>
                <Button
                    onClick={() => {
                        // window.open(html_url);
                    }}
                    size="medium"
                >
                    Goto Repo
                </Button>
                <Link className={classes.link}>
                    <Button
                        size="medium"
                    >
                        Track
                    </Button>
                </Link>
            </CardActions>
        }
    </Card>
}