import React from 'react';
import ImageOne from '../../images/egg1.jpg';
import ImageTwo from '../../images/egg2.jpg';
const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2>Egg Muffins</h2>
                    <p>Crispy, delicious and nutritious</p>
                    <span>$10</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2>Egg Muffins</h2>
                    <p>Crispy, delicious and nutritious</p>
                    <span>$10</span>
                </div>
            </div>
        </>
    );
};

export default Content;