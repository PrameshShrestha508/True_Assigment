import React, { useEffect, useState } from "react";
import "../style/read.css";
import axios from "axios";
const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://product-fhqo.onrender.com/products`).then((response) => {
      setAPIData(response.data.products);
    });
  }, []);

  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredNames = APIData.filter((query) =>
      query.product_name.toLowerCase().includes(search)
    );
    setAPIData(filteredNames);
  };
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Products"
          onChange={(e) => filterNames(e)}
        />
      </div>
      <table id="customers">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {APIData &&
            APIData.map((data) => {
              return (
                <tr>
                  <>
                    <td>{data.product_name}</td>
                    <td>{data.category_name}</td>
                    <td>{data.description}</td>
                    <td>{data.status}</td>
                    <td>{new Date(data.created_at).toDateString()}</td>
                  </>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
