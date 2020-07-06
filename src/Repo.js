import React, {useEffect, useState} from 'react';
import {Github} from "./Github";

export const Repo = (props) => {
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

    return (
        <>
            id
        </>
    );
}
