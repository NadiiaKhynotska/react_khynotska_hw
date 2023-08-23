import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import css from './Car.module.css'


interface IProps extends PropsWithChildren {
    car: ICar;
    // setCarForUpdate: Dispatch<SetStateAction<ICar>>
    // setTrigger: Dispatch<SetStateAction<boolean>>
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand} = car;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <button onClick={()=>dispatch(carActions.setCatForUpdate({car}))}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
            <button onClick={()=> navigate(id.toString() , {state: car})}>Car details</button>
        </div>
    );
};

export {Car}