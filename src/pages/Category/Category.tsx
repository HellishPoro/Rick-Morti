import { useParams, Link } from 'react-router-dom';
import { DATASETS } from '../../constants/datasets';
import './Category.css'

export const Category = ()=>{
  const { category } = useParams()
  const data = DATASETS[category as keyof typeof DATASETS]

  if(!data){
    return <span>No such category found.</span>
  }
  
  return (
    <div className="box">
      <h2>{category?.toUpperCase()}</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/${category}/${item.id}`}>
          {category === 'characters' && 'image' in item ? (
            <>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </>
            
          ) : (
            item.name
          )}
        </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};