import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchComp = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apiFetch();
  }, []);

  async function apiFetch() {
    const res = await axios.get("https://p-9x7e.onrender.com/products/products");
    console.log(res.data);
    setData(res.data.data);
  }

  async function apiFetch() {
    const res = await axios.post("https://p-9x7e.onrender.com/products/products",{});
    console.log(res.data);
    setData(res.data.data);
  }

  async function apiFetch(_id) {
    const res = await axios.put("https://p-9x7e.onrender.com/products/products",{_id});
    console.log(res.data);
    setData(res.data.data);
  }

  async function apiFetch() {
    const res = await axios.delete("https://p-9x7e.onrender.com/products/products",{});
    console.log(res.data);
    setData(res.data.data);
  }

  return <div>s</div>;
};

export default FetchComp;
