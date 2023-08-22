import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";

import {ICar} from "../interfaces";
import {carService} from "../services";
import css from './Car.module.css'

interface IProps extends PropsWithChildren {
    car: ICar;
    setCarForUpdate: Dispatch<SetStateAction<ICar>>;
    setTrigger:Dispatch<SetStateAction<boolean>>;
}

const Car: FC<IProps> = ({car, setCarForUpdate,setTrigger}) => {
    const {id, brand} = car;
    const navigate = useNavigate();

    const deleteCar = async () => {
        await carService.deleteById(id)
        setTrigger(prev => !prev)
    }

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
            <button onClick={()=> navigate(id.toString(),{state:car})}>Car details</button>
        </div>
    );
};

export {Car};