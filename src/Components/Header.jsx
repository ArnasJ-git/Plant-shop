import logo from '../assets/Logo.svg'
import search from '../assets/Search.svg'
import cart from '../assets/cart.svg'
import './ComponentsStyle/Header.scss'



export default function Header() {



    return (
        <>
        <div className="header-bg">
            <div className="wrapper header">
                <a href="#"> <img src={logo} alt="logo" /></a>
                <nav className='header-nav'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                </nav>
                <div className='header-side'>
                    <div className='side-search'>
                        Search
                        <img src={search} alt="search" />
                    </div>
                    <div className='side-cart'>
                        <a href="#"> <img src= {cart} alt="cart"/></a>
                    </div>
                </div>
            </div>
        </div>

        </>


    )
}


