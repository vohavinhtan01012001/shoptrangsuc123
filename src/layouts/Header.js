import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import '../assets/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import swal from 'sweetalert'
import { AuthContext } from '../helpers/AuthContext'
import axios from 'axios'

function Header() {
    const [onMenuUser, setOnMenuUser] = useState(false);
    const { authState } = useContext(AuthContext)
    const [cart, setCart] = useState(0)
    const [category, setCategory] = useState([])

    const history = useNavigate();


    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        swal('', "Đăng xuất thành công", "success")
        history("/")

        window.location.reload();
    }

    let menuUser = "";
    const handleMenuUser = () => {
        setOnMenuUser(!onMenuUser);
    }
    if (onMenuUser) {
        console.log(onMenuUser);
        menuUser = (
            <div className='header__user__menu'>
                <ul className='user__menu--list' >
                    <li className='user__menu--item'>
                        {authState.fullname}
                    </li >
                    <li className='user__menu--item'>
                        Thông tin của tôi
                    </li >
                    <li className='user__menu--item' onClick={handleLogOut}>
                        Đăng xuất
                    </li >
                </ul >
            </div >
        )
    }
    else {
        menuUser = "";
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/cart/showcart`, {
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        }).then(res => {
            setCart(res.data.cart.length)
        });
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/categorys').then(res => {
            setCategory(res.data)
            
        })
    },[])


    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className=""><Link to="/">Trang chủ</Link></li>
                                    <li><Link to="">Trang sức bạc</Link>
                                        <ul className="dropdown">
                                            {
                                                category.map((item, index) => {
                                                    return (
                                                        <li key={index}><Link to={`/category/${item.id}`}>{item.categoryName}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li><Link to="/">Trang sức vàng</Link></li>
                                    <li><Link to="">Kẹp cài tóc</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Liên hệ</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    {
                                        localStorage.getItem('accessToken') ? (
                                            <>
                                                <FontAwesomeIcon icon={faUser} style={{ color: "black", fontSize: "20px" }} onClick={handleMenuUser} />
                                                {menuUser}
                                            </>
                                        ) :
                                            <>
                                                <Link to="/login">Đăng nhập</Link>
                                                <Link to="/register">Đăng ký</Link>
                                            </>
                                    }
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch">
                                    </span></li>
                                    <li><Link to="/cart"><span className="icon_bag_alt"></span>
                                        <div className="tip">{cart}</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header