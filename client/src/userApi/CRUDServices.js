import axios from "axios";

export const Create = async (
  ProductName,
  ProductCode,
  img,
  unitPrice,
  Qty,
  TotalPrice
) => {
  const URL = "create";
  const PostBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    img: img,
    unitPrice: unitPrice,
    Qty: Qty,
    TotalPrice: TotalPrice,
  };

  try {
    const response = await axios.post(URL, PostBody);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export function Read() {}

export function ReadByID() {}

export function Update() {}

export function Delete() {}
