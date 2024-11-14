import React from "react";
import "./add.css";
import { assets } from "../../admin_assets/assets";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "saled",
      });
      toast.success("Food added successfully");
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex_col" onSubmit={onSubmitHandler}>
        <div className="add_img_upload flex_col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </div>
        <div className="add_product_name flex_col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type here"
          />
        </div>
        <div className="add_product_description flex_col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows={"6"}
            onChange={onChangeHandler}
            value={data.description}
            id=""
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="add_category_price">
          <div className="add_category flex_col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add_price flex_col">
            <p>Product price</p>
            <input
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add_btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
