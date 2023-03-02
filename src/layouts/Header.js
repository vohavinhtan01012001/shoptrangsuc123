import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import '../assets/css/style.css'

function Header() {
    return (
        <>
            {/* <div id="preloder">
                <div className="loader"></div>
            </div>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><Link to="/"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                    <li><Link to="/"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                </ul>
                <div className="offcanvas__logo">
                    <Link to="./index.html"><img src="img/logo.png" alt=""/></Link>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__auth">
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </div>
            </div> */}

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="./index.html"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className=""><Link to="/">Trang chủ</Link></li>
                                    <li><Link to="/shopsilvers">Trang sức bạc</Link>
                                        <ul className="dropdown">
                                            <li><Link to="">Nhẫn Bạc</Link></li>
                                            <li><Link to="">Dây Chuyền Bạc</Link></li>
                                            <li><Link to="">Lắc Tay Bạc</Link></li>
                                            <li><Link to="">Bông Tai Bạc</Link></li>
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
                                    <Link to="/">Đăng nhập</Link>
                                    <Link to="/">Đăng ký</Link>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch">
                                    </span></li>
                                    <li><Link to="/"><span className="icon_heart_alt">
                                    </span>
                                        <div className="tip">0</div>
                                    </Link></li>
                                    <li><Link to="/"><span className="icon_bag_alt"></span>
                                        <div className="tip">0</div>
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