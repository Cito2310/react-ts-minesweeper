import { useContext } from 'react';
import { contextSideBar } from './ProviderSideBarController';

import { FormConfigGrid } from '../form-config-grid/FormConfigGrid';

import "./sidebar.scss"

export const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useContext(contextSideBar)

    return (
        <div className={sidebarOpen ? "sidebar open right" : "sidebar right"}> {/* PARA CAMBIAR EL LADO DONDE SE DESPLEGARA LA BARRA LATERAL CAMBIAR right | left */}
            {/* MODIFICAR DESDE AQUI */}
            <div className='sidebar-section-top'>
                <h2>OPCIONES</h2>
                <i onClick={toggleSidebar} className="fa-solid fa-xmark"></i> {/* ESTE ELEMENTO ES REQUERIDO - NO BORRAR */}
            </div>

            <div className='sidebar-section-container'>
                <FormConfigGrid/>
            </div>
            {/* MODIFICAR HASTA AQUI */}
        </div>
    )
}
