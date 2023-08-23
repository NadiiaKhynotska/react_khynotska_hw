import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {ICar} from "../interfaces";

interface IProps extends PropsWithChildren {
    car: ICar;
    setCarForUpdate:Dispatch<SetStateAction<ICar>>
}

const Car: FC<IProps> = ({car,setCarForUpdate}) => {
    const{id,brand } = car;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button>Delete</button>
            <button>Car details</button>
        </div>
    );
};

export {Car};