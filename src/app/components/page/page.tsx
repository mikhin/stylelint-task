import React from 'react';

type propType = {
    children: React.ReactNode;
}

const Page: React.FC<propType> = ({ children }) => {
    return (
        <div className="page">
            <main className="page__content">
                {children}
            </main>
        </div>
    );
}

export default Page;
