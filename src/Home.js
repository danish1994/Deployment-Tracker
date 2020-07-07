import React, {useEffect, useState} from 'react';
import {Github} from "./Github";
import {RepoCard} from "./RepoCard";
import {Loader} from "./Loader";

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        setLoading(true);
        Github.repos().then((res) => {
            setRepos(res);
            setLoading(false);
        });
    }, [setRepos]);

    return (
        <>
            <Loader loading={loading}/>
            {
                repos.map((repo, id) => <RepoCard repo={repo} key={id}/>)
            }
        </>
    );
}
