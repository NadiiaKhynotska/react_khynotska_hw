import React from 'react';

const Company = ({company}) => {
    return (
        <div>
            <div> name: {company.name}</div>
            <div> catchPhrase: {company.catchPhrase}</div>
            <div> bs: {company.bs}</div>

        </div>
    );
};

export default Company;


// Company - яка відображає name,catchPhrase,bs