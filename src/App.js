import React from 'react';
import CreateCar from "./components/CreateCar/CreateCar";
import DeleteCar from "./components/DeleteCar/DeleteCar";
import PutCar from "./components/PutCar/PutCar";

const App = () => {
    return (
        <div>
            <CreateCar/>
            <DeleteCar/>
            <PutCar/>
        </div>
    );
};

export default App;


// http://owu.linkpc.net/carsAPI/v1/doc
// Реалізувати створення, видалення та оновлення машин