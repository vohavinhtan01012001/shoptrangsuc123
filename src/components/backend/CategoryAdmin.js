import React, { useEffect, useState } from "react";
import FooterAdmin from "../../layouts/backend/FooterAdmin";
import HeaderAdmin from "../../layouts/backend/HeaderAdmin";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function CategoryAdmin() {
  const [category, setcategory] = useState([]);
  const [product, setListProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/categorys").then((res) => {
      setcategory(res.data);
    });
  }, []);
  const handDelete = (e, id) => {
    axios.get(`http://localhost:3001/categorys/category/${id}`).then((res) => {
      if (res.data.listProduct.Products.length > 0) {
        swal("", "Không thể xoá, danh mục còn sản phẩm", "error");
      } else {
        const thisclicked = e.target.closest("tr");
        axios
          .delete(`http://localhost:3001/categorys/admin/categorydelete/${id}`)
          .then((res) => {
            if (res.data.status == 200) {
              thisclicked.closest("tr").remove();
              swal("", res.data.message, "success");
            } else {
              swal("", res.data.message, "error");
            }
          });
      }
    });
  };
  console.log(product);

  return (
    <div>
      <HeaderAdmin />
      <br />
      <div className="container">
        <h1>QUẢN LÝ DANH MỤC</h1>
        <hr className="my-4" />
        <div>
          <Link to="/admin/categoryaddadmin" className="btn btn-success">
            Thêm danh mục
          </Link>
        </div>
        <hr className="my-4" />
        <table className="table caption-top">
          <thead>
            <tr>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {category.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.categoryName}</td>
                  <td>
                    <Link
                      to={`/admin/categoryedit/${item.id}`}
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
    </div>
  );
}

export default CategoryAdmin;
