import React from "react";
import "../style/layout.css";
import { Link } from "react-router-dom";
import Read from "./read";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/create">Add Products</Link>
            </button>
          </li>
        </ul>
        <Read />
      </nav>
    </>
  );
};

export default Layout;
