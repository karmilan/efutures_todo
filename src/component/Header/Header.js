import React from 'react'
import '../Header/Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '2em' }} class="h-0.5 w-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    )
}

export default Header