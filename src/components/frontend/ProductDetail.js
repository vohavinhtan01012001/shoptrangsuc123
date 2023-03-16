import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./productDetail.css";

// import '../../assets/css/owl.carousel.min.css'
import "../../assets/css/slicknav.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-icons.css";
import "../../assets/css/bootstrap.min.css";
import swal from "sweetalert";
import { Button } from "bootstrap";

function ProductDetail() {
  const style = {
    overflowY: "hidden",
    outline: "none",
  };
  const id = useParams();
  const [product, setproduct] = useState([]);
  const [listOfProduct, setlistOfProduct] = useState([]);
  const [clickImg, setClickImg] = useState();
  const [quantity, setQuantity] = useState(1);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const productId = id.id;
    axios
      .get(`http://localhost:3001/products/productDetail/${productId}`)
      .then((res) => {
        setlistOfProduct(res.data.listProduct.Products);
        setproduct(res.data.product);
        setCategoryName(res.data.product.Category.categoryName);
      });
  }, [id.id]);

  //Của Vinh
  /*   const [myValue, setMyValue] = useState("");
  
    function handleInputChange(event) {
      setMyValue(event.target.value);
    }
  
    const [isChecked, setIsChecked] = useState(false);
  
    function handleCheckboxChange(event) {
      setIsChecked(event.target.checked);
    } */
  //

  //Sự kiện chọn ảnh
  const handleViewImg = (e) => {
    setClickImg(e.target.id);
  };

  let viewImg = "";
  if (clickImg == 2) {
    viewImg = (
      <img
        data-hash="product-1"
        className="product__big__img"
        src={product.img2}
        alt=""
      />
    );
  } else if (clickImg == 3) {
    viewImg = (
      <img
        data-hash="product-1"
        className="product__big__img"
        src={product.img3}
        alt=""
      />
    );
  } else if (clickImg == 4) {
    viewImg = (
      <img
        data-hash="product-1"
        className="product__big__img"
        src={product.img4}
        alt=""
      />
    );
  } else {
    viewImg = (
      <img
        data-hash="product-1"
        className="product__big__img"
        src={product.img1}
        alt=""
      />
    );
  }

  //xử lý số lượng
  const hanldeMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const hanldePlusQuantity = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  //Xử lý onclick giỏ hàng
  const hanldeAddToCart = (e) => {
    const productId = id.id;
    e.preventDefault();
    const data = {
      productId: productId,
      quantity: quantity,
    };
    axios
      .post("http://localhost:3001/cart/addcart", data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          swal("", res.data.message, "success");
        } else if (res.data.status == 201) {
          swal("", res.data.message, "success");
        } else {
          swal("", "Đăng nhập trước khi thêm vào giỏ hàng", "error");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Trang chủ
                </Link>
                <span>{product.productName}</span>;
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic" key={product.id}>
                <div
                  className="product__details__pic__left product__thumb nice-scroll"
                  style={style}
                >
                  <div className="pt" id="1" onClick={(e) => handleViewImg(e)}>
                    <img src={product.img1} alt="" />
                  </div>
                  <div className="pt" id="2" onClick={(e) => handleViewImg(e)}>
                    <img src={product.img2} alt="" />
                  </div>
                  <div className="pt" id="3" onClick={(e) => handleViewImg(e)}>
                    <img src={product.img3} alt="" />
                  </div>
                  <div className="pt" id="4" onClick={(e) => handleViewImg(e)}>
                    <img src={product.img4} alt="" />
                  </div>
                </div>
                <div className="product__details__slider__content">
                  <div className="product__details__pic__slider owl-carousel">
                    {viewImg}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" key={product.id}>
              <div className="product__details__text">
                <h3>
                  {product.productName}
                  <span>Danh mục sản phẩm: {categoryName} </span>
                </h3>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span>( 138 đánh giá )</span>
                </div>
                <div className="product__details__price">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.salePrice)}{" "}
                  <span>
                    {Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </span>
                </div>
                <p>
                  <li>
                    Bảo hành đánh bóng đánh sáng miễn phí trong suôt quá trình
                    sử dụng
                  </li>
                  <li>Đứt hư gãy hàn sửa chữa phí 20k</li>
                </p>
                <div className="product__details__button">
                  <div
                    className="select-wrapper clearfix fs-4 text"
                    style={{ marginBottom: "30px" }}
                  >
                    <label>Số lượng</label>
                    <div className="input-group fs-4 text">
                      <input
                        type="button"
                        value="-"
                        onClick={hanldeMinusQuantity}
                        className="qty-btn"
                      />
                      <div className="qty-btn fs-4 text text-center lh-lg p-2">
                        {quantity}
                      </div>
                      <input
                        type="button"
                        value="+"
                        onClick={hanldePlusQuantity}
                        className="qty-btn"
                      />
                    </div>
                  </div>
                  <button to="/" className="cart-btn" onClick={hanldeAddToCart}>
                    <span className="icon_bag_alt"></span> Thêm vào giỏ hàng
                  </button>
                  {/* <ul>
                                <li><Link to="/"><span className="icon_heart_alt"></span></Link></li>
                                <li><Link to="/"><span className="icon_adjust-horiz"></span></Link></li>
                            </ul> */}
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Tình trạng:</span>
                      <div className="stock__checkbox">
                        <label>
                          Còn hàng
                          {/* <input
                            type="checkbox"
                            id="stockin"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          /> */}
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Màu sắc:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input type="radio" name="color__radio" id="red" />
                          <span className="checkmark"></span>
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg"></span>
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Khuyến mãi:</span>
                      <p>Miễn phí giao hàng</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                {/* <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/"
                      role="tab"
                    >
                      Mô tả
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      role="tab"
                    >
                      Chi tiết sản phẩm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      role="tab"
                    >
                      Đánh giá ( 2 )
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>SẢN PHẨM TƯƠNG TỰ</h5>
              </div>
            </div>
            {listOfProduct.map((item, index) => {
              return item.id == id.id ? (
                ""
              ) : (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="product__item">
                    <Link to={`/productdetail/${item.id}`}>
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url(${item.img1}` }}
                      >
                        <div className="label new">New</div>
                        <ul className="product__hover">
                          <li>
                            <Link
                              to="img/product/related/rp-1.jpg"
                              className="image-popup"
                            >
                              <span className="arrow_expand"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="icon_heart_alt"></span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span className="icon_bag_alt"></span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Link>
                    <div className="product__item__text">
                      <h6>
                        <Link to={`/productdetail/${item.id}`}>
                          {item.productName}
                        </Link>
                      </h6>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product__price">
                        {Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.salePrice)}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail;
