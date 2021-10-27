import React, { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTTEXT_KEY = "GET_KEY_FROM_GOOGLE_CSE_CREATE_NEW"


export default function useGoogleSearch(term) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTTEXT_KEY}&q=${term}`)
                .then(res => res.json())
                .then((resJson) => {
                    setData(resJson)
                })
        }
        fetchData();
    }, [term])

    return { data };
}
