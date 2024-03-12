import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import { Button, Input, InputLabel, Typography } from "@mui/material";
import "../Style/Addproduct.css";
import { addProduct } from "../service/apl";

const Addproduct = () => {
  const initialValue = {
    pname: "",
    pimage: "",
    ptittle: "",
    pprice: "",
  };

  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const addUserDetails = async () => {
    await addProduct(user);
  };

  return (
    <>
      <FormGroup className="rp-formgroup">
        <Typography variant="h4"> Add Product </Typography>
        <FormControl>
          <InputLabel>Product Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="pname" />
        </FormControl>
        <FormControl>
          <InputLabel> Product Image </InputLabel>
          <Input type="url" onChange={(e) => onValueChange(e)} name="pimage" />
        </FormControl>
        <FormControl>
          <InputLabel> Product Tittle </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="ptittle" />
        </FormControl>
        <FormControl>
          <InputLabel> Product Price</InputLabel>
          <Input
            type="number"
            onChange={(e) => onValueChange(e)}
            name="pprice"
          />
        </FormControl>

        <FormControl>
          <Button onClick={() => addUserDetails()} variant="contained">
            Add Product
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default Addproduct;
