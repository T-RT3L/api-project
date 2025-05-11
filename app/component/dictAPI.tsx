"use client"

import React, { useEffect, useState } from 'react'

const dictAPI = (url:String) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(props.url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
        <h1>Data from API</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default dictAPI
