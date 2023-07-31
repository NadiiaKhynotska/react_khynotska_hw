import {Component} from "react";

import css from './Car.module.css'
class Car extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {id, brand, price, year} = this.props.car
        return (
            <div className={css.create}>
                <div>ID: {id}</div>
                <div>Brand: {brand}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
        )
    }
}

export {Car}