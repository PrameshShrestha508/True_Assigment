import React, { useState } from "react";
import axios from "axios";
import "../style/create.css";
const Create = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    category_name: "",
    description: "",
    status: "",
    created_at: "",
    created_by: "",
  });

  const postData = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      "https://product-fhqo.onrender.com/products",
      formData
    );
    if (response) {
      console.log(response);
    } else {
      alert("something is wrong");
    }

    setFormData((pre) => ({
      ...pre,
      product_name: "",
      category_name: "",
      description: "",
      status: "",
      created_at: "",
      created_bt: "",
    }));
    console.log(setFormData);
  };

  return (
    <div>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, product_name: e.target.value }))
            }
          />
        </label>

        <label>
          Category Name:
          <select
            name="category_name"
            id="category_name"
            value={formData.category_name}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, category_name: e.target.value }))
            }
          >
            <option value="furniture">Furniture</option>
            <option value="electronic">Electronic</option>
            <option value="dairy">Dairy</option>
          </select>
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, description: e.target.value }))
            }
          />
        </label>

        <label>
          Status:
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, status: e.target.value }))
            }
          >
            <option value="in_stock">In Stock</option>
            <option value="limited_available">Limited Available</option>
            <option value="out_off_stock">Out Off Stock</option>
          </select>
        </label>

        <label>
          Created By:
          <input
            type="date"
            name="created_by"
            value={formData.created_by}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, created_by: e.target.value }))
            }
          />
        </label>
        <label>
          Created at:
          <input
            type="text"
            name="created_at"
            value={formData.created_at}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, created_at: e.target.value }))
            }
          />
        </label>
        <input type="submit" onClick={postData} value="Submit" />
      </form>
    </div>
  );
};
export default Create;
