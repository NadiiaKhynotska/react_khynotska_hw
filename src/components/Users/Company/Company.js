import React from 'react';

const Company = ({company}) => {
    const {name, catchPhrase, bs} = company
    return (
        <>
            <div> company name: {name}</div>
            <div> catchPhrase: {catchPhrase}</div>
            <div> bs: {bs}</div>
        </>
    );
};

export default Company;


// Company - яка відображає name,catchPhrase,bs