import axios from "axios";
import { useEffect, useState } from "react";

export const useSingleItem = (resourceType: string, id: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancel: () => void;

        setLoading(true);
        setError(null);
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${resourceType}/${id}`,
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((e) => {
            if (axios.isCancel(e)) return;
            setError(e);
            setLoading(false);
        });

        return () => cancel();
    }, [resourceType, id]);

    return { data, loading, error };
}