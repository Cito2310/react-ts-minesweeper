import { useContext } from 'react';
import { contextSideBar } from './ProviderSideBarController';


export const BtnToggleSidebar = () => {
    const {toggleSidebar} = useContext(contextSideBar)

    return (
        <button 
            className='btn-toggle-sidebar' 
            onClick={toggleSidebar}
        >
                <i className="fa-solid fa-bars"/>
        </button>
    )
}