import React, {useEffect, useMemo, useState} from 'react';
import {Github} from "./Github";
import {Loader} from "./Loader";

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

    const taggedCategories = useMemo(() => {
        const {tags = []} = data || {};
        return Github.categorizeRegex(tags);
    }, [data]);

    console.log(taggedCategories);

    return (
        <>
            <Loader loading={loading}/>
            {
                !loading && <>
                    data
                </>
            }
        </>
    );
}
