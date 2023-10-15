import { query } from "express";

const productModel = async () => {
  try {
    //line 6-7 is just a dummy. Need to write own SQL
    await query("SELECT NOW()");
    console.log("product table is CREATED");
  } catch (error) {
    console.log(error);
  }
};

export default productModel;
