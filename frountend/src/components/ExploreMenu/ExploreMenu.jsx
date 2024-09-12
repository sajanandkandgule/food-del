import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    console.log({category});
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our manu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        consequatur est nihil ut distinctio dolor obcaecati quis quo similique
        laudantium harum animi ipsum, laboriosam provident molestias numquam
        mollitia. Earum quasi dolorum ea porro aspernatur?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                // setCategory((prev) =>
                //   prev === item.menu_name ? "All" : item.menu_name
                // )
                setCategory(item.menu_name) // use above one is also working
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;


