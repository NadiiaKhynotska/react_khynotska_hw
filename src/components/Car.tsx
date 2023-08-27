import {FC, PropsWithChildren} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import css from './Car.module.css'


interface IProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand} = car;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [, setQuery] = useSearchParams();

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };
    const getCarDetails = ()=>{
        navigate(id.toString() , {state: car})
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <button onClick={()=>dispatch(carActions.setCatForUpdate({car}))}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
            <button onClick={()=> getCarDetails()}>Car details</button>
        </div>
    );
};

export {Car}