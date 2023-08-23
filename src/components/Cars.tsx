import {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect} from "react";
import {Car} from "./Car";

import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import css from './Cars.module.css'

interface IProps extends PropsWithChildren {
    // cars: ICar[];
    // setCarForUpdate: Dispatch<SetStateAction<ICar>>
    // setTrigger: Dispatch<SetStateAction<boolean>>
}

const Cars: FC<IProps> = () => {

    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div className={css.Cars}>
            {/*{cars.map(car =>  <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}*/}
            {cars.map(car =>  <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};