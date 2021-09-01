import React from 'react';
import Spinner from './spinner/Spinner';

const PrimaryLoader: React.FC = () => (
    <div className="w-100 vh-100 bg-white fixed-top d-flex justify-content-center align-items-center">
        <Spinner style={{ color: 'var(--global-primary-color)' }} />
    </div>
);
export default PrimaryLoader;