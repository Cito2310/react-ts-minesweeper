import { createContext, useState } from 'react';

export interface ISideBar {
    children?: React.ReactNode,
    sidebarOpen?: boolean,
    toggleSidebar?: () => void,
}

export const contextSideBar = createContext<ISideBar>({})

export const ProviderSideBar: React.FC<ISideBar> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {setSidebarOpen(!sidebarOpen)}

    return (
        <contextSideBar.Provider value={{sidebarOpen, toggleSidebar}}>
            {children}
        </contextSideBar.Provider>
    )
}
