import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>Explore our menu</h1>
      <p className="exploreMenu_text">
        Choose from a diverse menu featuring adelectable array of dishes crafted
        with fitnes ingrediense and culinary expertise. Our mission is to
        satisfy your craving and levate your dinning experience, one delicious
        meal at atime.
      </p>
      <div className="exploreMenu_list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="exploreMenu_listItem"
            key={index}
          >
            <img
              src={item.menu_image}
              alt=""
              className={category === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
