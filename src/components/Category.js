import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const Category = ({ ItemData }) => {
  const [show, setShow] = useState(true);
  const handleTitleClick = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white my-4 rounded-sm">
      <div className="font-bold p-4 rounded-md">
        <div
          className="font-bold flex justify-between"
          onClick={handleTitleClick}
        >
          <span>{ItemData.title}</span>
          <span>▼</span>
        </div>
        <div>
          {show &&
            ItemData?.itemCards.map((item) => (
              <CategoryItem key={item.card.info.id} food={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
