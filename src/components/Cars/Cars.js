import {Component} from "react";

import {carsServices} from "../../services";
import {Car} from "./Car/Car";
import css from './Cars.module.css'

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {cars: []}
    }

    componentDidMount() {
        carsServices.getAll().then(({data}) => this.setState({cars: [...data]}))
    }

    render() {
        return (
            <div className={css.wrapper}>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }
}

export {Cars}