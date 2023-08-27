import {FC, PropsWithChildren,useEffect} from "react";
import {Car} from "./Car";

import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import css from './Cars.module.css'
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {

    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1',size: '10'});
    const page = +query.get('page')
    const size = +query.get('size')

    useEffect(() => {
        dispatch(carActions.getAll({page,size}))
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }, [page,dispatch, setQuery, size]);

    return (
        <div className={css.Cars}>
            {cars.map(car =>  <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};