import { useState, useEffect } from "react";

const useFetchServer = (url, method = 'GET') => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            fetch(url, { method: method })
                .then(response => response.json())
                .then(response => {
                    setResponse(response);
                })
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return [response, setResponse, error];
};

export default useFetchServer;
