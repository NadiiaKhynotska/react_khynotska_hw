import React from 'react';
import {CarContainer} from "./components/CarContainer/CarContainer";
import {Provider} from "react-redux";
import {store} from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <CarContainer/>
            </div>
        </Provider>
    );
};

export default App;