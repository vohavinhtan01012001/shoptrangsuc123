import axios from 'axios'
import swal from 'sweetalert';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../helpers/AuthContext'
import Header from '../../../layouts/Header'
import Footer from "../../../layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import './auth.css'

function Login() {
    const { setAuthState } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useNavigate();

    const hanldeLogin = () => {
        const data = { email: email, password: password }
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.status === 400) {
                swal("", response.data.message, "error")
            }
            else {
                localStorage.setItem("accessToken", response.data.accessToken);
                swal("", response.data.message, "success")
                console.log(response.data.email)
                  setAuthState({
                    email: response.data.email,
                    fullname: response.data.fullname,
                    id: response.data.id,
                    status: true,
                    role:response.data.role
                });
                history('/')
                window.location.reload();
            }
        })
    }
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="grid wide">
                    <div className="row">
                        <div className="app__container--category">
                            <Link to="/" className="app__container--link">Trang chủ</Link>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <p className="app__container--text">Đăng nhập</p>
                        </div>
                    </div>
                    <div>
                        <div className="app__container--formLogin">
                            <h1 className="formLogin__heading">
                                ĐĂNG NHẬP
                            </h1>
                            <form >
                                <div className="formLogin__email">
                                    <div className="formLogin__email--icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <input type="gmail" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="formLogin__email--input" />
                                </div>
                                <div className="formLogin__password">
                                    <div className="formLogin__password--icon">
                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                    <input type="password" name="password" placeholder="Mật khẩu"
                                        onChange={(e) => setPassword(e.target.value)} className="formLogin__password--input" />
                                </div>
                                <div className="formLogin__btn">
                                    <button type='button' onClick={hanldeLogin} className="formLogin__btn--login">
                                        Đăng nhập
                                    </button>
                                </div>
                            </form>
                            <div className="formLogin__register">
                                <Link to="/register" className="formLogin__register--link">
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login