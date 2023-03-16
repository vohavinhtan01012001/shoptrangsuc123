import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FooterAdmin from '../../layouts/backend/FooterAdmin'
import HeaderAdmin from '../../layouts/backend/HeaderAdmin'
import axios from "axios";
import swal from 'sweetalert';

function CategoryAddAdmin() {
  const [category, setCategory] = useState([{
    categoryID: "",
    catgoryName: "",
  },]);
  const handleInput = (e) => {
    e.persist();
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const updateCategory = (e) => {
    e.preventDefault();
    const data = {
      categoryID: category.categoryID,
      categoryName: category.categoryName,
    };
    axios
      .post(`http://localhost:3001/categorys/admin/categoryadd`, data)
      .then((res) => {
        if(res.data.status == 200) {
          swal("","Đã thêm thành công","success");
        }
      });
  };
  return (
    <div>
    <HeaderAdmin />
    <hr class="my-4" />
    <div class="bg-light">
      <div class="container">
        <main>
          <div class="row g-5">
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Thêm danh mục</h4>
              <form
                class="needs-validation"
                onSubmit={updateCategory}
              >
                <div class="row g-3">
                <div class="col-sm-6">
                    <label class="form-label">Mã danh mục</label>
                    <input
                      type="text"
                      class="form-control"
                      value={category.categoryID}
                      name="categoryID"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Tên danh mục</label>
                    <input
                      type="text"
                      class="form-control"
                      value={category.categoryName}
                      name="categoryName"
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>

                <hr class="my-4" />

                <input
                  class="btn btn-success mx-2"
                  type="submit"
                  value="Xác nhận"
                  onclick="add()"
                />
                <input class="btn btn-warning mx-2" type="reset" value="Reset" />
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
    <FooterAdmin />
  </div>
  )
}

export default CategoryAddAdmin
