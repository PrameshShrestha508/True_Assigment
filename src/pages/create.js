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
  });

  const postData = async (e) => {
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
          <input
            type="text"
            name="category_name"
            value={formData.category_name}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, category_name: e.target.value }))
            }
          />
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
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, status: e.target.value }))
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
