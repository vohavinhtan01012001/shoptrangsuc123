import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAdmin from "../../layouts/backend/HeaderAdmin";
import FooterAdmin from "../../layouts/backend/FooterAdmin";

import "../../assets/css/backend/form-validation";
import { useParams } from "react-router-dom";

function ProductEditAdmin() {
  const id = useParams();
  const [product, setProduct] = useState([
    {
      categoryId: "",
      productName: "",
      price: 0,
      salePrice: 0,
      color: "",
      size: "",
      quantity: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
    },
  ]);
  const [pricture, setPicture] = useState([]);
  const [pricture2, setPicture2] = useState([]);
  const [pricture3, setPicture3] = useState([]);
  const [pricture4, setPicture4] = useState([]);
  const [category, setCategory] = useState([]);
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const productId = id.id;
    axios
      .get(`http://localhost:3001/products/admin/productedit/${productId}`)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, [id.id]);

  useEffect(() => {
    axios.get(`http://localhost:3001/categorys`).then((res) => {
      setCategory(res.data);
    });
  }, []);


  const updateProduct = (e) => {
    const slug = id.id;
    const data = {
      categoryId: product.categoryId,
      productName: product.productName,
      price: product.price,
      salePrice: product.salePrice,
      color: product.color,
      size: product.size,
      quantity: product.quantity,
      img1: pricture.image,
      img2: pricture2.image2,
      img3: pricture3.image3,
      img4: pricture4.image4,
    }
    axios.put(`http://localhost:3001/products/admin/productupdate/${slug}`, data).then(res => {
        
    })
  }

  return (
    <>
      <HeaderAdmin />
      <hr className="my-4" />
      <div className="bg-light">
        <div className="container">
          <main>
            <div className="row g-5">
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Chỉnh sửa sản phẩm</h4>
                <form className="needs-validation" onSubmit={updateProduct} >
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Mã sản phẩm</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.id}
                        name="productId"

                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Tên sản phẩm</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.productName}
                        name="productName"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Màu</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.color}
                        name="color"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Size</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.size}
                        name="size"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Số lượng</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.quantity}
                        name="quantity"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Hình 1</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.img1}
                        name="quantity"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Hình 2</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.img2}
                        name="quantity"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Hình 3</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.img3}
                        name="quantity"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Hình 4</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.img4}
                        name="quantity"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Giá</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.price}
                        name="price"
                        onChange={handleInput}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label">Giá khuyến mãi</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.salePrice}
                        name="salePrice"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-md-5">
                      <label className="form-label">Danh mục</label>
                      <select className="form-select" name="CategoryId">
                        {category.map((item, index) => {
                          return (
                            <option key={index} value="">
                              {item.categoryName}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <input
                    className="btn btn-success mx-2"
                    type="submit"
                    value="Xác nhận"
                    onclick="add()"
                  />
                  <input
                    className="btn btn-warning mx-2"
                    type="reset"
                    value="Reset"
                  />
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
}

export default ProductEditAdmin;
