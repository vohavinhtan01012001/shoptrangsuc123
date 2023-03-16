import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home"></i> Trang chủ
                </a>
                <span>Xác nhận đơn hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="coupon__link">
                <span className="icon_tag_alt"></span>
                <Link to="/">Bạn có mã giảm giá?</Link> Nhấn vào đây để nhập
                code.
              </h6>
            </div>
          </div>
          <form action="#" className="checkout__form">
            <div className="row">
              <div className="col-lg-8">
                <h5>Chi tiết thanh toán</h5>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="checkout__form__input">
                      <p>
                        Tên <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="checkout__form__input">
                      <p>
                        Họ <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="checkout__form__input">
                      <p>
                        Quốc gia <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__form__input">
                      <p>
                        Địa chỉ <span>*</span>
                      </p>
                      <input type="text" placeholder="Địa chỉ đường" />
                      <input type="text" placeholder="Số nhà, số tầng" />
                    </div>
                    <div className="checkout__form__input">
                      <p>
                        Thành phố <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__form__input">
                      <p>
                        Mã bưu điện <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="checkout__form__input">
                      <p>
                        Số điện thoại <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="checkout__form__input">
                      <p>
                        Email <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* <div className="checkout__form__checkbox">
                      <label for="acc">
                        Tạo tài khoản?
                        <input type="checkbox" id="acc" />
                        <span className="checkmark"></span>
                      </label>
                      <p>
                        Create am acount by entering the information below. If
                        you are a returing customer login at the <br />
                        top of the page
                      </p>
                    </div> */}
                    {/* <div className="checkout__form__checkbox">
                      <label for="note">
                        Note about your order, e.g, special noe for delivery
                        <input type="checkbox" id="note" />
                        <span className="checkmark"></span>
                      </label>
                    </div> */}
                    <div className="checkout__form__input">
                      <p>
                        Ghi chú đơn hàng<span>*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Lưu ý về đơn đặt hàng của bạn, ví dụ: thông báo đặc biệt về giao hàng"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="checkout__order">
                  <h5>Đơn hàng của bạn</h5>
                  <div className="checkout__order__product">
                    <ul>
                      <li>
                        <span className="top__text">Sản phẩm</span>
                        <span className="top__text__right">Thành tiền</span>
                      </li>
                      <li>
                        01. Chain buck bag <span>$ 300.0</span>
                      </li>
                      <li>
                        02. Zip-pockets pebbled
                        <br /> tote briefcase <span>$ 170.0</span>
                      </li>
                      <li>
                        03. Black jean <span>$ 170.0</span>
                      </li>
                      <li>
                        04. Cotton shirt <span>$ 110.0</span>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout__order__total">
                    <ul>
                      <li>
                        Tổng tiền <span>$ 750.0</span>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout__order__widget">
                    {/* <label for="o-acc">
                      Create an acount?
                      <input type="checkbox" id="o-acc" />
                      <span className="checkmark"></span>
                    </label>
                    <p>
                      Create am acount by entering the information below. If you
                      are a returing customer login at the top of the page.
                    </p> */}
                    <label for="check-payment">
                      Thanh toán chuyển khoản
                      <input type="checkbox" id="check-payment" />
                      <span className="checkmark"></span>
                    </label>
                    <label for="paypal">
                      PayPal
                      <input type="checkbox" id="paypal" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <button type="submit" className="site-btn">
                    Xác nhận đơn hàng
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Checkout;
