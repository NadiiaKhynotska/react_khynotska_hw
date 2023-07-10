import React from 'react';

const Company = ({name,catchPhrase,bs}) => {
    return (
        <div>
            <div> name: {name}</div>
            <div> catchPhrase: {catchPhrase}</div>
            <div> bs: {bs}</div>

        </div>
    );
};

export default Company;


// Company - яка відображає name,catchPhrase,bs