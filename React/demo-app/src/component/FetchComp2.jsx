import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchComp2 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();}, []);

  const apiFetch = async (method) => {
    try {
      let response;
      
      switch (method) {
        case 'GET':
          response = await axios.get("https://p-9x7e.onrender.com/products/products");
          break;
        case 'POST':
          response = await axios.post("https://p-9x7e.onrender.com/products/add-product", {pName:"Sachin", pPrice:100});
          break;
        case 'PUT':
          response = await axios.put("`http://localhost:3000/https://p-9x7e.onrender.com/products/edit-product/${editId}", {});
          break;
        case 'DELETE':
          response = await axios.delete("https://p-9x7e.onrender.com/products/delete-product/${deleteId}", {});
          break;
        default:
          throw new Error('Unsupported method');
      }

      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = () => {
    apiFetch('GET');
  };

  return <div>{}</div>;
};

export default FetchComp2;