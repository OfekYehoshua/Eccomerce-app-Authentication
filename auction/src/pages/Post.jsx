import * as React from "react";
import "../components/styles.css";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ControllableStates from "../components/categories";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from "axios";
// import * as yup from "yup";
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import ResponsiveAppBar from '../components/navbar'
import { useSelector } from "react-redux";


const options = ['Fashion', 'Electrics', 'Home'];

export default function Post() {
  const [product , setProduct] = useState({
    name: "",
    category: "",
    startBuy: "",
    buyNow: "",
    image: ""
  })
  const auth = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const onSubmit = (e) => {
  e.preventDefault()
  console.log(product);
  axios.post('/api/product/new', product, config).then((res)=>{
          console.log(res.status)
        });
        
}



const handleChange = (e) => {
  const value = e.target.value
  setProduct({
    ...product,
    [e.target.name]: value
  });
};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const newProduct = {
//     name: product.name,
//     category: product.category,
//     startBuy: product.startBuy,
//     buyNow: product.buyNow,
//     image: product.image
//   };

// axios.post(`/api/product/new`, newProduct).then((res)=>{
//       console.log(res.status)
//     })
//   }

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');


  return (
    <Paper elevation={24}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="post-container">
      <form onSubmit={onSubmit}>
        <h1>post here product</h1>
        <TextField 
          id="outlined-textarea"
          label="Product name"
          placeholder="write here"
          multiline
          onChange={(e) => handleChange(e)}
          name="name"
          value={product.name} 
        />
        {/* ////category */}
        <div>
      <br />
      <Autocomplete
        value={product.category}
        name="category"
        onChange={(e) => {
          handleChange(e);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    </div>
        {/* ////category end*/}
        <TextField
          id="outlined-number"
          label="Starting price"
          placeholder="$"
          type="number"
          name="startBuy"
          value={product.startBuy} 
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="outlined-number"
          label="Buy now price"
          placeholder="$"
          type="number"
          name="buyNow"
          value={product.buyNow} 
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e)}
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input name="image" 
            onChange={(e) => handleChange(e)}
            
            value={product.image} hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            >
            <input   onChange={(e) => handleChange(e)}
            name="image"
            value={product.image} hidden accept="image/*" type="file" />
            
            <PhotoCamera />
          </IconButton> 
        </Stack>
        <button type="submit" className="button-73">post your item</button>
        </form>
      </div>
      
    </Paper>
  );
}
