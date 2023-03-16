import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../layouts/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronRight, faEnvelope, faLock, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../../layouts/Footer';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import swal from 'sweetalert';

function Register() {
    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        confirm_password: "",
        address: "",
        phone: "",
    }


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().min(5,"Phải đầy đủ họ và tên").required("Cần nhập tài khoản đúng quy định!!"),
        email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
        password: Yup.string().min(6).max(20).required("cần nhập đúng quy định!!"),
        confirm_password: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp!").required("Nhập không đúng mật khẩu!"),
        address: Yup.string().required("Trường này là bắt buộc"),
        phone: Yup.string().required("Trường này là bắt buộc"),
    })


    const onSubmit = (data) => {
        axios.post(`http://localhost:3001/auth/register`, data).then((res) => {
            if(res.data.status === 200) {
                swal("",res.data.message,"success")
            }
            else{
                swal("",res.data.message,"error")
            }
        });
    };

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="grid wide">
                    <div className="row">
                        <div className="app__container--category">
                            <Link to="/" className="app__container--link">Trang chủ</Link>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <p className="app__container--text">Đăng ký</p>
                        </div>
                    </div>
                    <div className="">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            <div className="app__container--formLogin">
                                <h1 className="formLogin__heading">
                                    ĐĂNG KÝ
                                </h1>
                                <Form>
                                    <div className="formLogin__email">
                                        <div className="formLogin__email--icon">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <Field id="fullName" name="fullName" placeholder="Họ và tên" className="formLogin__email--input" />
                                    </div>
                                    <ErrorMessage name='fullName' component="div" style={{ color: "red" }} />
                                    <div className="formLogin__email">
                                        <div className="formLogin__email--icon">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <Field id="email" name="email" placeholder="Email" className="formLogin__email--input" />
                                    </div>
                                    <ErrorMessage name='email' component="div" style={{ color: "red" }} />
                                    <div className="formLogin__password">
                                        <div className="formLogin__password--icon">
                                            <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <Field type="password" id="password" name="password" placeholder="Mật khẩu..." className="formLogin__password--input" />
                                    </div>
                                    <div className="formLogin__password">
                                        <div className="formLogin__password--icon">
                                            <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <Field type="password" id="confirm_password" name="confirm_password" placeholder="Nhập lại mật khẩu..." className="formLogin__password--input" />
                                    </div>
                                    <ErrorMessage name='confirm_password' component="div" style={{ color: "red" }} />
                                    <div className="formLogin__email">
                                        <div className="formLogin__email--icon">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <Field id="address" name="address" placeholder="Địa chỉ" className="formLogin__email--input" />
                                    </div>
                                    <ErrorMessage name='address' component="div" style={{ color: "red" }} />

                                    <div className="formLogin__email">
                                        <div className="formLogin__email--icon">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <Field id="phone" name="phone" placeholder="Số điện thoại" className="formLogin__email--input" />
                                    </div>
                                    <ErrorMessage name='phone' component="div" style={{ color: "red" }} />
                                    <div className="formLogin__btn">
                                        <button type="submit" className="formLogin__btn--login">
                                            Đăng ký
                                        </button>
                                    </div>
                                </Form>
                                <div className="formLogin__register">
                                    <Link to="/login" className="formLogin__register--link">
                                        Quay về
                                    </Link>
                                </div>
                            </div>
                        </Formik>
                    </div>

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Register