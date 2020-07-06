import React, {useEffect, useState} from 'react';
import {Github} from "./Github";
import {RepoCard} from "./RepoCard";

export const Home = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        Github.repos('codalien').then((res) => {
            setRepos(res);
        });
    }, [setRepos]);

    return (
        <>
            {
                repos.map((repo, id) => <RepoCard repo={repo} key={id}/>)
            }
        </>
    );
}
