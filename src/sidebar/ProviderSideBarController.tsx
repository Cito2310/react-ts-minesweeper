import { createContext, useState } from 'react';

interface props { children: JSX.Element | JSX.Element[] }
export interface ISideBar {
    sidebarOpen: boolean,
    toggleSidebar: () => void,
}

export const contextSideBar = createContext<ISideBar>({} as ISideBar)

export const ProviderSideBar = ({children}: props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {setSidebarOpen(!sidebarOpen)}

    return (
        <contextSideBar.Provider value={{sidebarOpen, toggleSidebar}}>
            {children}
        </contextSideBar.Provider>
    )
}