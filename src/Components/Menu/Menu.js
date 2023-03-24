import { useRef } from 'react'
import './MenuStyle.css'

function Menu() {
    let flag = false
    let ulNavbarSelect = useRef()
    function openClose(event) {
        if (!flag) {
            event.target.innerHTML = "⨯"
            event.target.classList.add('btn-close')
            ulNavbarSelect.current.style.right = '0px'
            flag = true
        } else if (flag) {
            event.target.innerHTML = "="
            event.target.classList.remove('btn-close')
            ulNavbarSelect.current.style.right = '-300px'
            flag = false
        }
    }
    return (
        <nav className='navbar'>
            <a href="#landing" className='link-logo-navbar'><h1 className='logo-h1-navbar'><span className='logo-span-navbar'>CO</span>UNFIRM</h1></a>
            <button className='btn-open' onClick={openClose}>=</button>
            <ul className='ul-navbar' ref={ulNavbarSelect}>
                <a href="#landing" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-home'> Home</span>
                    </li>
                </a>
                <a href="#welcome" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-user'> About</span>
                    </li>
                </a>
                <a href="#featured" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-briefcase'> Portfolio</span>
                    </li>
                </a>
                <a href="#offer" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-tasks'> Services</span>
                    </li>
                </a>
                <a href="#team" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-users'> Team</span>
                    </li>
                </a>
                <a href="#contact" className="link-navbar">
                    <li className="li-item-navbar">
                        <span className='fa fa-phone'> Contact</span>
                    </li>
                </a>
            </ul>
        </nav>
    )
}
export default Menu