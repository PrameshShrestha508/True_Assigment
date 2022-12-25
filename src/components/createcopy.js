import React, { useState } from "react";
import axios from "axios";
import "./create.css";
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
      alert("data is submitted");
    } else {
      alert("something is wrong");
    }

    setFormData({
      product_name: "",
      category_name: "",
      description: "",
      status: "",
      created_at: "",
    });
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
              setFormData({ ...formData, product_name: e.target.value })
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
              setFormData({ ...formData, category_name: e.target.value })
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
              setFormData({ ...formData, description: e.target.value })
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
              setFormData({ ...formData, status: e.target.value })
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
              setFormData({ ...formData, created_at: e.target.value })
            }
          />
        </label>
        <input type="submit" onClick={postData} value="Submit" />
      </form>
    </div>
  );
};

export default Create;




import React, { useState } from "react";
import axios from "axios";
import "./create.css";
const Create = () => {
  const [product_name, setProductName] = useState("");
  const [category_name, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [created_at, setCreatedAt] = useState("");

  const postData = async (
    product_name,
    category_name,
    description,
    status,
    created_at
  ) => {
    await axios
      .post("https://product-fhqo.onrender.com/products", {
        method: "POST",
        body: JSON.stringify({
          product_name: product_name,
          category_name: category_name,
          description: description,
          status: status,
          created_at: created_at,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(product_name, category_name, description, status, created_at);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Category Name:
          <input
            type="text"
            name="category_name"
            value={category_name}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Created at:
          <input
            type="text"
            name="created_at"
            value={created_at}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <button type="submit" className="submit_button">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Create;



import React, { useState } from "react";
import axios from "axios";
import "./create.css";
const Create = () => {
  const [product_name, setProductName] = useState("");
  const [category_name, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [created_at, setCreatedAt] = useState("");
  const [APIData, setAPIData] = useState([]);
  const postData = async (
    product_name,
    category_name,
    description,
    status,
    created_at
  ) => {
    await fetch("https://product-fhqo.onrender.com/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: product_name,
        category_name: category_name,
        description: description,
        status: status,
        created_at: created_at,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAPIData((APIData) => [data, ...APIData]);
        setProductName("");
        setCategoryName("");
        setDescription("");
        setStatus("");
        setCreatedAt("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(product_name, category_name, description, status, created_at);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Category Name:
          <input
            type="text"
            name="category_name"
            value={category_name}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Created at:
          <input
            type="text"
            name="created_at"
            value={created_at}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </label>
        <button type="submit" className="submit_button">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Create;
