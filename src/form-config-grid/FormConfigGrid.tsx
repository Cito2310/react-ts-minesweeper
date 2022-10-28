import { InputNumber } from "./InputNumber"

import "./form-option.scss"
import { useForm } from './useForm';
import { useEffect } from 'react';

interface IGridMinesweeper {
    mines: number,
    width: number,
    height: number,
}

export const FormConfigGrid = () => {
    let initialGrid: IGridMinesweeper = {
        mines: 10,
        width: 10,
        height: 10
    }
    useEffect(() => {
        if (!localStorage.getItem("grid-config")) {
            localStorage.setItem("grid-config", JSON.stringify(initialGrid))
        }
    },[])

    const {
        height,
        mines,
        onInputChange,
        width,
    } = useForm<IGridMinesweeper>( localStorage.getItem("grid-config")   ?   JSON.parse(localStorage.getItem("grid-config") || "")   :   initialGrid )

    const onSubmit = () => {
        localStorage.setItem("grid-config", JSON.stringify({height, mines, width}))
    }

    return (
        <form onSubmit={onSubmit} className="form-config-grid">
            <InputNumber
                label="Ancho"
                name="width"
                value={width}
                onChange={onInputChange}
            />
            <InputNumber
                label="Altura"
                name="height"
                value={height}
                onChange={onInputChange}
            />
            <InputNumber
                label="Minas"
                name="mines"
                value={mines}
                onChange={onInputChange}
            />

            <input className="btn-submit" type="submit" value="Aceptar"/>
        </form>
    )
}
