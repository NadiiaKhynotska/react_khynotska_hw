import React, {memo} from 'react';

const ArrComponent = memo(({fullArr, arr}) => {
    console.log('Arr Item')
    return (
        <div>
            {arr.map((arrItem, index)=> <div key={index}>{arrItem}</div>)}

            <button onClick={fullArr}>Add item to arr</button>
        </div>
    );
});

export default ArrComponent;