import { useState } from 'react'
import { Link } from 'react-router-dom'

export function AppHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    function onToggleMenu() {
        setIsOpenMenu(!isOpenMenu)
    }

    return <header className="full main-layout app-header">
        <main>
            <nav>
                <Link to="/">home page</Link>
                <Link to="/entity">entity list</Link>
            </nav>
            <button className="fa-solid bars menu-toggle-btn"
                onClick={() => onToggleMenu()}></button>
            {isOpenMenu && <div className="main-screen" onClick={() => onToggleMenu()}>
                <div className="mobile-menu"></div>
            </div>}
        </main>
    </header>
}