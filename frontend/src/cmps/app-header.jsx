import { useState } from 'react'
import { BackBtn, ForwardBtn } from './form'

export function AppHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    function onToggleMenu() {
        setIsOpenMenu(!isOpenMenu)
    }

    return <header className="app-header">
        <nav>
            <BackBtn />
            <ForwardBtn />
        </nav>
        <main>
            <button className="fa-solid bars menu-toggle-btn"
                onClick={() => onToggleMenu()}></button>
            {isOpenMenu && <div className="main-screen" onClick={() => onToggleMenu()}>
                <div className="mobile-menu"></div>
            </div>}
        </main>
    </header>
}