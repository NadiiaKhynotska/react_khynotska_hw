import {FC, PropsWithChildren} from "react";
import {Car} from "./Car";

interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
    return (
        <div>
            <Car/>
        </div>
    );
};

export {Cars};