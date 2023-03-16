import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAdmin from "../../layouts/backend/HeaderAdmin";
import FooterAdmin from "../../layouts/backend/FooterAdmin";

import "../../assets/css/backend/form-validation";
import swal from "sweetalert";

function ProductAddAdmin() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([
    {
      productID: "",
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
  const [categoryId,setCategoryId] = useState('')
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/categorys`).then((res) => {
      setCategory(res.data);
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    const data = {
      productID: product.productID,
      CategoryId: categoryId,
      productName: product.productName,
      price: product.price,
      salePrice: product.salePrice,
      color: product.color,
      size: product.size,
      quantity: product.quantity,
      img1: product.img1,
      img2: product.img2,
      img3: product.img3,
      img4: product.img4,
    };
    axios
      .post(`http://localhost:3001/products/admin/productadd`, data)
      .then((res) => {
        if(res.data.status == 200) {
          swal("","Đã thêm thành công","success");
        }
      });
  };

  return (
    <>
      <HeaderAdmin />
      <hr className="my-4" />
      <div className="bg-light">
        <div className="container">
          <main>
            <div className="row g-5">
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Thêm sản phẩm</h4>
                <form className="needs-validation" onSubmit={updateProduct}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Mã sản phẩm</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.productID}
                        name="productID"
                        onChange={handleInput}
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
                        name="img1"
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
                        name="img2"
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
                        name="img3"
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
                        name="img4"
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
                      <select className="form-select" onChange={(e)=>{setCategoryId(e.target.value)}}>
                        {category.map((item, index) => {
                          return (
                            <option
                              key={index}
                              name="CategoryId"
                              value={item.id}
                            >
                              {item.categoryName}
                            </option>
                          );
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

export default ProductAddAdmin;
