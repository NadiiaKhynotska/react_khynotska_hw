import React from 'react';


import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

const App = () => {
    return (
        <div>
            <Child1/>
            <Child2/>
        </div>
    );
};

export default App;

// context
// Зробити структуру компонентів -
// App
// Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1
//
//
//
// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subchild:
//     Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть