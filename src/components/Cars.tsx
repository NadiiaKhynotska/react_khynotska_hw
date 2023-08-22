import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";

import {ICar} from "../interfaces";
import {Car} from "./Car";
import css from './Cars.module.css'

interface IProps extends PropsWithChildren {
    cars: ICar[];
    setCarForUpdate: Dispatch<SetStateAction<ICar>>;
    setTrigger: Dispatch<SetStateAction<boolean>>;
}

const Cars: FC<IProps> = ({cars,setCarForUpdate, setTrigger}) => {
    return (
        <div className={css.Cars}>
            {cars.map(car => <Car
                key={car.id}
                car={car}
                setCarForUpdate={setCarForUpdate}
                setTrigger={setTrigger}
            />)}
        </div>
    );
};

export {Cars};