import {FC, PropsWithChildren} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import css from './CarForm.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
    const {reset, register, setValue, handleSubmit} = useForm<ICar>();

    const {carForUpdate,total_pages} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const [,setQuery] = useSearchParams();

    if(carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)
    }

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        // dispatch(carActions.getAll({page:total_pages}))
        setQuery(prev => {
            prev.set('page',total_pages.toString())
            return prev
        })
        reset()

    }
    const update:SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.update({id:carForUpdate.id, car}))
        reset()
    };

    return (
        <div className={css.CarForm}>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type={"text"} placeholder={'brand'}{...register('brand')}/>
                <input type={"text"} placeholder={'price'}{...register('price')}/>
                <input type={"text"} placeholder={'year'}{...register('year')}/>
                <button>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
};

export {CarForm};