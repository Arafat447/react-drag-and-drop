import React from 'react';

const LayoutObjectData = ({layoutData}) => {
    return (
        <textarea className='text-area-value' value={JSON.stringify(layoutData)} id="" cols="30" rows="10"></textarea>
    );
};

export default LayoutObjectData;