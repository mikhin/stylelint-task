import React from 'react';
import { ReactComponent as CatalogList__Icon } from './__icon/catalog-list__icon.svg';

type propType = {
    disclaimer: string,
    children: React.ReactNode;
    menu: React.ReactNode;
    searchValue: string;
    onSearchInputChange(event: React.FormEvent<HTMLInputElement>): void;
}

const CatalogList: React.FC<propType> = ({ children, disclaimer, searchValue, onSearchInputChange, menu }) => {
    return (
        <div className="catalog-list">
            <div className="catalog-list__description">
                <p className="catalog-list__disclaimer">
                    {disclaimer}
                </p>
                <CatalogList__Icon className="catalog-list__icon"/>
                <input
                    onChange={onSearchInputChange}
                    value={searchValue}
                    type="text"
                    className="catalog-list__input"
                    placeholder="Поисковый запрос"
                />
            </div>
            <div className="catalog-list__menu">
                {menu}
            </div>
            <ul className="catalog-list__items">
                {children}
            </ul>
        </div>
    );
}

export default CatalogList;
