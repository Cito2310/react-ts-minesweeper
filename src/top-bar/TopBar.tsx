import { contextGridConfig } from '../minesweeper-game/ProviderMinesweeper';
import { BtnToggleSidebar } from "../sidebar/BtnToggleSidebar"
import "./top-bar.scss"
import { useContext } from 'react';

export const TopBar = () => {
    const {mines} = useContext(contextGridConfig);

    return (
        <div className="topbar">
            <div className="topbar-section">
                <h1 className="topbar-title">MINESWEEPER.ts</h1>
            </div>
            <div className="topbar-section">
                <h2>Minas restantes: {mines}</h2>
                <BtnToggleSidebar/>
            </div>
        </div>
    )
}