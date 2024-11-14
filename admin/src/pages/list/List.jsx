import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error("Error");
    }
  };

  console.log(list);
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex_col">
      <p>Food List</p>
      <div className="list_table">
        <div className="list_table_format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div className="list_table_format" key={index}>
              <img src={`${url}/uploads/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
