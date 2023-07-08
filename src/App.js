import React from 'react';
import Simpsons from "./components/Simpsons/Simpsons";

import style from './App.module.css'
const App = () => {
    return (
        <div className={style.container}>
            <Simpsons
                name={'Bart'}
                surname={'Simpson'}
                age={10}
                photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <Simpsons
                name={'Homer'}
                surname={'Simpson'}
                age={40}
                photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <Simpsons
                name={'Marge'}
                surname={'Simpson'}
                age={38}
                photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <Simpsons
                name={'Lisa'}
                surname={'Simpson'}
                age={9}
                photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
            />
            <Simpsons
                name={'Maggie'}
                surname={'Simpson'}
                age={1}
                photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
            />
        </div>
    );
};

export default App;