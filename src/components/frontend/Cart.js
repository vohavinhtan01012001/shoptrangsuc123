import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ChainBucketBag from "../../assets/img/product/Chain-bucket-bag.jpg";
import ZipPocketsPebbledToteBriefcase from "../../assets/img/product/ZipPocketsPebbledToteBriefcase.jpg";
import BlackJean from "../../assets/img/product/BlackJean.jpg";
import CottonShirt from "../../assets/img/product/BlackJean.jpg";
import "./Cart.css";
import axios from "axios";
import swal from "sweetalert";

function Cart() {
  const [cart, setCart] = useState([]);
  const history = useNavigate();

  if(!localStorage.getItem('accessToken')){
      swal("","Vui lòng đăng nhập trước khi tiếp tục!","error");
      history("/")
  }

  const handleDecrement = (cart_id) => {
    setCart(
      cart.map((item) => {
        if (cart_id === item.id) {
          if (item.quantity > 1) {
            return ({ ...item, quantity: item.quantity - 1 });
          }
          else {
            swal("warning", `số lượng tối thiểu là 1`, "warning")
            return (item);
          }
        }
        else {
          return (item)
        }
      }
      )
    );
    updateCartQuantity(cart_id, "dec");
  }

  const handleIncrement = (cart_id) => {
    setCart(
      cart.map((item) => {
        if (cart_id === item.id) {
          if (item.quantity < item.Product.quantity) {
            return ({ ...item, quantity: item.quantity + 1 });
          }
          else {
            swal("warning", `chỉ còn lại ${item.quantity} sản phẩm`, "warning")
            return (item);
          }

        }
        else {
          return (item)
        }
      }
      )
    );
    updateCartQuantity(cart_id, "inc");
  }

  //upload số lượng
  function updateCartQuantity(cart_id, scope) {
    axios.put(`http://localhost:3001/cart/updatequantity/${cart_id}/${scope}`).then(res => {
      console.log(res.data)
    });
  }

  useEffect(() => {
    axios.get("http://localhost:3001/cart",
      {
        headers: {
          accessToken: localStorage.getItem('accessToken')
        }
      }).then((res) => {
        setCart(res.data);
        console.log(res.data)
      });
  }, []);

  const hanldeDelete = (e, cartId) => {
    e.preventDefault();

    const thisClicked = e.target.closest('tr');
    axios.delete(`http://localhost:3001/cart/delete/${cartId}`,
      {
        headers: {
          accessToken: localStorage.getItem('accessToken')
        }
      }).then(res => {
        if (res.data.status === 200) {
          thisClicked.closest("tr").remove();
        }
        else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
          thisClicked.innerText = "Xóa sản phẩm";
        }
      })
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
  var sumPrice = 0;

  return (
    <div>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="./index.html">
                  <i className="fa fa-home"></i> Home
                </Link>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shop-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((item, i) => {
                        sumPrice += item.Product.price * item.quantity;
                        return (
                          <tr key={i}>
                            <td className="cart__product__item">
                              <img src={item.Product.img1} alt="" className="cart__product__img" />
                              <div className="cart__product__item__title" style={{ cursor: "pointer" }} onClick={() => { history(`/productdetail/${item.Product.id}`) }}>
                                <h6>{item.Product.productName}</h6>
                                <div className="rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                              </div>
                            </td>
                            <td className="cart__price">{formatCurrency(item.Product.price)}</td>
                            <td className="cart__quantity">
                              <div className="pro-qty">
                                <button
                                  className="dec-qtybtn"
                                  onClick={() => handleDecrement(item.id)}
                                >
                                  -
                                </button>
                                <input type="text" value={item.quantity} />
                                <button
                                  className="dec-qtybtn"
                                  onClick={() => handleIncrement(item.id)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="cart__total">{formatCurrency(item.Product.price * item.quantity)}</td>
                            <td className="cart__close" onClick={(e) => hanldeDelete(e, item.id)}>
                              <span className="icon_close"></span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn">
                <Link to="/products">TIẾP TỤC MUA SẮM</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="discount__content">
                <h6>MÃ GIẢM GIÁ</h6>
                <form action="#">
                  <input type="text" placeholder="Nhập mã phiếu giảm giá" />
                  <button type="submit" className="site-btn">
                    XÁC NHẬN
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="cart__total__procced">
                <h6>TỔng tiền</h6>
                <ul>
                  <li>
                     <span>{formatCurrency(sumPrice)}</span>
                  </li>
                </ul>
                <Link to="/pay" className="primary-btn">
                  THANH TOÁN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
