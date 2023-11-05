import React from 'react';

import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col  bg-blue-500 rounded-xl text-center'>
            <h2 className='text-6xl text-white'>{price}</h2>
            <h2 className='text-4xl text-white'>{name}</h2>
            <div className='p-4 flex-grow '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <div className='mx-5'><button className='bg-green-400  mb-3 w-full hover:bg-green-900'>Buy Now</button></div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;