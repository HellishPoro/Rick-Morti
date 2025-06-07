import axios from "axios";
import { useEffect, useState } from "react";

export type ItemType = {
  id: number;
  name: string;
  image?: string;
};

export const usePageCategory = (pageNumber: number, resourceType: string) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [resourceType]);

  useEffect(() => {
    let cancel: () => void;

    setLoading(true);
    setError(null);

    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/${resourceType}`,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.results]);
        setHasMore(!!res.data.info.next);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(e);
        setLoading(false);
      });

    return () => cancel();
  }, [pageNumber, resourceType]);

  return { data, loading, error, hasMore };
};
