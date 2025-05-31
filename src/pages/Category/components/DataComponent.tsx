import { Link } from "react-router-dom";
import React from "react";

type DataComponentProps = {
  id: number | string;
  image?: string;
  name: string;
  category: string | undefined;
};

export const DataComponent = React.forwardRef<HTMLLIElement, DataComponentProps>(
  ({ id, image, name, category }, ref) => {
    return (
      <li ref={ref}>
        <Link to={`/${category}/${id}`}>
          {category === 'characters' && image ? (
            <>
              <img src={image} alt={name} />
              <p>{name}</p>
            </>
          ) : (
            <p>{name}</p>
          )}
        </Link>
      </li>
    );
  }
);
