import React, { useRef } from "react";
import Toaster from "react-hot-toast";
import {
  isEmpty,
  successToast,
  errorToast,
} from "../../helper/ValidationHelper";

const CreateFrom = () => {
  let ProductName,
    ProductCode,
    img,
    unitPrice,
    Qty,
    TotalPrice = useRef();

  const SaveData = () => {
    let p_name = ProductName.value;
    let p_code = ProductCode.value;
    let Image = img.value;
    let unit_price = unitPrice.value;
    let qty = Qty.value;
    let Total_price = TotalPrice.value;
    console.log(p_name);

    if (isEmpty(p_name)) {
      errorToast("Product name required");
      console.log(errorToast("Product name required"));
    } else if (isEmpty(p_code)) {
      errorToast("Product code required");
    } else if (isEmpty(Image)) {
      errorToast("Product image required");
    } else if (isEmpty(unit_price)) {
      errorToast("Product unit price required");
    } else if (isEmpty(qty)) {
      errorToast("Product qty required");
    } else if (isEmpty(Total_price)) {
      errorToast("Product total price required");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-2">
          <label>Product Name</label>
          <input
            ref={(input) => (ProductName = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Product Code</label>
          <input
            ref={(input) => (ProductCode = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Image</label>
          <input
            ref={(input) => (img = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>Unit Price</label>
          <input
            ref={(input) => (unitPrice = input)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-4 p-2">
          <label>Quantity</label>
          <input
            ref={(input) => (Qty = input)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4 p-2">
          <label>TotalPrice</label>
          <input
            ref={(input) => (TotalPrice = input)}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4 p-2">
          <button onClick={SaveData} className="btn btn-success w-100">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFrom;
