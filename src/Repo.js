import React, {useEffect, useMemo, useState} from 'react';
import {Github} from "./Github";
import {Loader} from "./Loader";
import {RepoCard} from "./RepoCard";
import {TagCard} from "./TagCard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    repoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export const Repo = (props) => {
    const classes = useStyles();

    const {match: {params: {id}}} = props;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            setLoading(true);
            Github.getByUrl(window.atob(id))
                .then((repo) => {
                    const {tags_url} = repo;
                    Github.getByUrl(tags_url)
                        .then((tags) => {
                            setData({
                                ...repo,
                                tags
                            });
                            setLoading(false);
                        })
                });
        } catch (e) {
            // Error Decoding
        }
    }, [id]);

    const taggedCategories = useMemo(() => {
        const {tags = []} = data || {};
        return Github.categorizeRegex(tags);
    }, [data]);

    return (
        <>
            <Loader loading={loading}/>
            {
                !loading && <div className={classes.repoContainer}>
                    <RepoCard repo={data} hideButtons={true}/>
                    <div className={classes.tagsContainer}>
                        {Object.entries(taggedCategories).map(([tagName, tags]) => <TagCard tags={tags} tagName={tagName} key={tagName}/>)}
                    </div>
                </div>
            }
        </>
    );
}
