import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setState({ data, loading: false, error: null });
            } catch (error) {
                setState({ data: null, loading: false, error: new Error('Unknown error') });
            }
        };
        fetchData();
    }, [url]);

    return { data: state.data, loading: state.loading, error: state.error };
};

