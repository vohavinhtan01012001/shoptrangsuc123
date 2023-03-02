import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

import category6 from "../../assets/img/categories/category-6.jpg"
import category7 from "../../assets/img/categories/category-7.jpg"
import category8 from "../../assets/img/categories/category-8.jpg"
import category9 from "../../assets/img/categories/category-9.jpg"
import category10 from "../../assets/img/categories/category-10.jpg"


function Home() {
  return (
    <>
       <Header />
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                style={{ backgroundImage: `url(${category6}` }}
              >
                {/* <div className="categories__text">
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <Link to="/">Shop now</Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category7}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Men’s fashion</h4>
                      <p>358 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category8}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Kid’s fashion</h4>
                      <p>273 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category9}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category10}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="banner set-bg" data-setbg="img/banner/banner-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 m-auto">
              <div className="banner__slider owl-carousel">
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="trend spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Đang Hot</h4>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/ht-1.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>NHẪN THOI 4 ĐÁ FREESIZE 0537</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">160,000₫</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/ht-2.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>NHẪN TRÁI TIM LẤP LÁNH NGÓN ÚT 0754</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">200,000₫</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/ht-3.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>NHẪN VÒNG ĐỐI BI ZICZAC 0756</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">220,000₫</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Bán chạy</h4>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/bs-1.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>BÔNG TAI XOẮN XƯỚC 0500</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/bs-2.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>DÂY CHUYỀN TRÁI TIM FULL ĐÁ BABY 0133</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">300,000₫</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src={category7} alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>LẮC TAY VÔ CỰC TRƠN 0755</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">340,000₫</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Sản phẩm mới</h4>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/f-1.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>LẮC TAY VÀNG 14K HANADA KHẮC CHỮ SIGN 061</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">4,760,000₫</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/f-2.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>Metallic earrings</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">3,210,000₫</div>
                  </div>
                </div>
                <div className="trend__item">
                  <div className="trend__item__pic">
                    <img src="img/trend/f-3.jpg" alt="" />
                  </div>
                  <div className="trend__item__text">
                    <h6>DÂY CHUYỀN 14K HANADA CHỮ V ĐÁ 051</h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">3,510,000₫</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="discount__pic">
                <img src="img/discount.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="discount__text">
                <div className="discount__text__title">
                  <span>Giảm giá</span>
                  <h2>Mùa hè 2023</h2>
                  <h5>
                    <span>Giảm</span> 50%
                  </h5>
                </div>
                <div className="discount__countdown" id="countdown-time">
                  <div className="countdown__item">
                    <span>22</span>
                    <p>Days</p>
                  </div>
                  <div className="countdown__item">
                    <span>18</span>
                    <p>Hour</p>
                  </div>
                  <div className="countdown__item">
                    <span>46</span>
                    <p>Min</p>
                  </div>
                  <div className="countdown__item">
                    <span>05</span>
                    <p>Sec</p>
                  </div>
                </div>
                <Link to="/">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-car"></i>
                <h6>Miễn phí ship</h6>
                <p>Với đơn hàng trên 1tr VNĐ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-money"></i>
                <h6>Hoàn tiền 100%</h6>
                <p>Nếu sản phẩm có vấn đề</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-support"></i>
                <h6>Hỗ trợ trực tuyến 24/7</h6>
                <p>Tận tình hỗ trợ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-headphones"></i>
                <h6>Thanh toán an toàn</h6>
                <p>Bảo mật thanh toán 100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home