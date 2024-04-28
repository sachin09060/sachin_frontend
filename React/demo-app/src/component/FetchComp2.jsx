// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FetchComp2 = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetchData();}, []);

//   const apiFetch = async (method) => {
//     try {
//       let response;
      
//       switch (method) {
//         case 'GET':
//           response = await axios.get("https://p-9x7e.onrender.com/products/products");
//           break;
//         case 'POST':
//           response = await axios.post("https://p-9x7e.onrender.com/products/add-product", {pName:"Sachin", pPrice:100});
//           break;
//         case 'PUT':
//           response = await axios.put("`http://localhost:3000/https://p-9x7e.onrender.com/products/edit-product/${editId}", {});
//           break;
//         case 'DELETE':
//           response = await axios.delete("https://p-9x7e.onrender.com/products/delete-product/${deleteId}", {});
//           break;
//         default:
//           throw new Error('Unsupported method');
//       }

//       console.log(response.data);
//       setData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchData = () => {
//     apiFetch('GET');
//   };

//   return <div>{}</div>;
// };

// export default FetchComp2;



// import React, { useState } from "react";
// import axios from "axios";
// import { Container, TextField, Button, Typography, Grid } from "@mui/material";

// const FetchComponent = () => {
//   const [inputData, setInputData] = useState({
//     pName: "",
//     pPrice: "",
//     editId: "",
//     deleteId: "",
//   });
//   const [responseData, setResponseData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleGet = async () => {
//     try {
//       const response = await axios.get(
//         "https://p-9x7e.onrender.com/products/products"
//       );
//       setResponseData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const response = await axios.post(
//         "https://p-9x7e.onrender.com/products/add-product",
//         { ...inputData }
//       );
//       setResponseData(response.data.data);
//     } catch (error) {
//       console.error("Error posting data:", error);
//     }
//   };

//   const handlePut = async () => {
//     try {
//       const response = await axios.put(
//         `https://p-9x7e.onrender.com/products/edit-product/${inputData.editId}`,
//         { ...inputData }
//       );
//       setResponseData(response.data.data);
//     } catch (error) {
//       console.error("Error updating data:", error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(
//         `https://p-9x7e.onrender.com/products/delete-product/${inputData.deleteId}`
//       );
//       setResponseData(response.data.data);
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Fetch Component
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField
//             name="pName"
//             label="Product Name"
//             value={inputData.pName}
//             onChange={handleChange}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             name="pPrice"
//             label="Product Price"
//             value={inputData.pPrice}
//             onChange={handleChange}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             name="editId"
//             label="Edit ID"
//             value={inputData.editId}
//             onChange={handleChange}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             name="deleteId"
//             label="Delete ID"
//             value={inputData.deleteId}
//             onChange={handleChange}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary" onClick={handlePost}>
//             Add Product
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="primary" onClick={handlePut}>
//             Update Product
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" color="secondary" onClick={handleDelete}>
//             Delete Product
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button variant="contained" onClick={handleGet}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>
//       {responseData && (
//         <Typography variant="body1" gutterBottom>
//           Response Data: {JSON.stringify(responseData)}
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default FetchComponent;

import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const FetchComponent = () => {
  const [inputData, setInputData] = useState({
    pName: "",
    pPrice: "",
    editId: "",
    deleteId: "",
  });
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGet = async () => {
    try {
      const response = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setResponseData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        { ...inputData }
      );
      setResponseData(response.data.data);
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handlePut = async () => {
    try {
      const updatedData = { ...responseData.find(item => item._id === inputData.editId), ...inputData }; // Merge inputData with existing data
      const response = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${inputData.editId}`,
        { ...updatedData }
      );
      setResponseData(response.data.data);
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${inputData.deleteId}`
      );
      setResponseData(response.data.data);
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fetch Component
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="pName"
            label="Product Name"
            value={inputData.pName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="pPrice"
            label="Product Price"
            value={inputData.pPrice}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="editId"
            label="Edit ID"
            value={inputData.editId}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="deleteId"
            label="Delete ID"
            value={inputData.deleteId}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handlePost}>
            Add Product
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete Product
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handlePut}>
            Update Product
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" onClick={handleGet}>
            Get Data
          </Button>
        </Grid>
      </Grid>
      {responseData && (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {responseData.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row._id}</TableCell>
                  <TableCell>{row.pName}</TableCell>
                  <TableCell>{row.pPrice}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default FetchComponent;
