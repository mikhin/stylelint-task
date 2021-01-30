import React from 'react';

type propType = {
    title: string,
    children: React.ReactNode;
}

const Dialog: React.FC<propType> = ({ title, children }) => {
    return (
        <div className="dialog">
            <div className="dialog__window">
                <header className="dialog__header">
                    <h2 className="dialog__title">
                        {title}
                    </h2>
                </header>
                <div className="dialog__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Dialog;
