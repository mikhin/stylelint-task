import React from 'react';

type propType = {
    children: React.ReactNode;
}

const CatalogList__Item: React.FC<propType> = ({children}) => {
    return (
        <li className="catalog-list__item">
            {children}
        </li>
    );
}

export default CatalogList__Item;
