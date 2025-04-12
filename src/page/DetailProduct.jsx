import React from "react";
import { useParams } from "react-router-dom";
const DetailProduct = () => {
  const { category, name } = useParams();
  return (
    <div>
      {category.replaceAll("_", " ")} - {name.replaceAll("_", " ")}
    </div>
  );
};

export default DetailProduct;
