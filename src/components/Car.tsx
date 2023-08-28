import {FC, PropsWithChildren, useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";
import css from './Car.module.css'
import noImg from '../assetes/img/noimg.png'
import {carService} from "../services";


interface IProps extends PropsWithChildren {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand,photo} = car;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [, setQuery] = useSearchParams();
    const fileInput = useRef<HTMLInputElement>();
    const [img, setImg] = useState<string>(null)

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };
    const getCarDetails = ()=>{
        navigate(id.toString() , {state: car})
        setQuery(prev => ({...prev, page: prev.get('page')}))
    }

    const addPhoto =async () => {
        const formData = new FormData();
        const file:Blob = fileInput.current.files[0];
        formData.append('photo',file)
        await carService.addPhoto(id,formData)
        setImg(URL.createObjectURL(file))

    };

    return (
        <div className={css.Car}>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <img src ={photo||img|| noImg} alt={brand} onClick={()=>fileInput.current.click()}/>
            <div>
                <button onClick={() => dispatch(carActions.setCatForUpdate({car}))}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
                <button onClick={() => getCarDetails()}>Car details</button>
            </div>
            <input type="file" accept={'image/jpeg ,image/png'} style={{display:'none'}} onChange={addPhoto} ref={fileInput}/>
        </div>
    );
};

export {Car}