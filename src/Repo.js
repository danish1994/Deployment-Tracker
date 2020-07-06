import React, {useEffect, useState} from 'react';
import {Github} from "./Github";

export const Repo = (props) => {
    const {match: {params: {id}}} = props;

    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            Github.getByUrl(window.atob(id)).then((res) => {
                console.log(res);
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
