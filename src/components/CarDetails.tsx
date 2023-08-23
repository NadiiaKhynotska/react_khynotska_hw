import {FC, PropsWithChildren} from "react";
import {ICar} from "../interfaces";
import css from './CarDetails.module.css'

interface IProps extends PropsWithChildren {
    car: ICar;
}

const CarDetails: FC<IProps> = ({car: {id, brand, price, year}}) => {
    return (
        <div className={css.CarDetails}>
            <div>ID:{id}  -- Brand:{brand}  -- Price:{price}  -- Year:{year}</div>
        </div>
    );
};

export {CarDetails};