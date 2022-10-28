import { BtnToggleSidebar } from "../sidebar/BtnToggleSidebar"
import "./top-bar.scss"

export const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-section">
                <h1 className="topbar-title">MINESWEEPER.ts</h1>
            </div>
            <div className="topbar-section">
                <h2>Minas restantes: 10</h2>
                <BtnToggleSidebar/>
            </div>
        </div>
    )
}