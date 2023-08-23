import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {Car} from "./Car";
import {ICar} from "../interfaces";

interface IProps extends PropsWithChildren {
    cars: ICar[];
    setCarForUpdate: Dispatch<SetStateAction<ICar>>
}

const Cars: FC<IProps> = ({cars,setCarForUpdate}) => {

    return (
        <div>
            {cars.map(car =>  <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};