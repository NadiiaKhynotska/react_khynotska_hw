import {FC, PropsWithChildren} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {carService} from "../services";

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
    const {reset, register, setValue, handleSubmit} = useForm<ICar>();

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.getAll()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'}{...register('brand')}/>
            <input type={"text"} placeholder={'price'}{...register('price')}/>
            <input type={"text"} placeholder={'year'}{...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};