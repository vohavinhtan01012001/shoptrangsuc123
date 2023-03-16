import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../layouts/backend/HeaderAdmin";
import FooterAdmin from "../../layouts/backend/FooterAdmin";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

function ProductAdmin() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      setproduct(res.data);
    });
  }, []);
  const handDelete = (e, id) => {
    const thisclicked = e.target.closest("tr");
    axios
      .delete(`http://localhost:3001/products/admin/productdelete/${id}`)
      .then((res) => {
        if (res.data.status == 200) {
          thisclicked.closest("tr").remove();
          swal("", res.data.message, "success");
        } else {
          swal("", res.data.message, "error");
        }
      });
  };
  return (
    <>
      <HeaderAdmin />
      <br />
      <div className="container">
        <h1>QUẢN LÝ SẢN PHẨM</h1>
        <hr className="my-4" />
        <div>
          <Link to="/admin/productaddadmin" className="btn btn-success">
            Thêm sản phẩm
          </Link>
        </div>
        <hr className="my-4" />
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.Category.categoryName}</td>
                  <td>{item.quantity}</td>
                  <td>Còn hàng</td>
                  <td>
                    <Link
                      to={`/admin/productedit/${item.id}`}
                      className="btn btn-primary mx-2"
                      role="button"
                    >
                      Chỉnh sửa
                    </Link>
                    <button
                      onClick={(e) => {
                        swal({
                          title: "Thông báo",
                          text: "Bạn có chắc muốn xoá không?",
                          icon: "warning",
                          buttons: ["Không", "Có"],
                          dangerMode: true,
                        }).then(function (isConfirm) {
                          if (isConfirm) {
                            handDelete(e, item.id);
                          }
                        });
                      }}
                      className="btn btn-danger mx-2"
                      role="button"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <FooterAdmin />
    </>
  );
}

export default ProductAdmin;
