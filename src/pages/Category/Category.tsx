import { useParams } from 'react-router-dom';
import { usePageCategory } from '../../hooks/usePageCharacter';
import { RESOURCE_MAP } from '../../data/ResourceMap';
import ErrorBoundary from '../../common/ErrorBoundary';
import { DataComponent } from '../../components/Category/DataComponent';
import './Category.css'
import { useCallback, useEffect, useRef, useState } from 'react';

type RouteParams = {
  category?: string;
};

type ItemType = {
  id: number;
  index?: number;
  name: string;
  image?: string;
};

export const Category = ()=>{
  const { category } = useParams<RouteParams>()
  const [pageNumber, setPageNumber] = useState<number>(1);
  const resourceType = RESOURCE_MAP[category as string];

  useEffect(() => {
    setPageNumber(1);
  }, [category]);

  const observer = useRef<IntersectionObserver | null>(null)

  const {data, loading, error, hasMore} = usePageCategory(pageNumber as number, resourceType as string);

  const lastNodeRef = useCallback((node: HTMLLIElement | null) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prevState) => prevState + 1);
      }
    });

    if (node) {
      observer.current.observe(node);
    }

    console.log('Observer is set up for the last node:', node);
  }, [loading, hasMore]);


  if(loading) return <span>Loading...</span>
  if(error) return <span>Error</span>  

  if(!data || data.length === 0){
    return <span>No such category found.</span>
  }

  return (
    <div className="box">
      <h2>{category?.toUpperCase()}</h2>
      <ErrorBoundary>
        <ul>
          {data.map((item: ItemType, index: number) => {
            if (data.length  === index + 1) {
              return (
                <DataComponent
                ref={lastNodeRef}
                key={`${item.id}-${index}`}
                id={item.id}
                image={item.image}
                name={item.name}
                category={category}
            />
            )
            } else{
              return(
                <DataComponent
                key={`${item.id}-${index}`}
                id={item.id}
                image={item.image}
                name={item.name}
                category={category}
            />
              ) 
            }
          })}
        </ul>
      </ErrorBoundary>
    </div>
  );
};