import React, { FC } from "react";

type ProductDetailProps = {
  title: string;
  description: string;
  price: number;
};

const ProductDetail: FC<ProductDetailProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <>
      <h1 className="text-3xl text-bold">{title}</h1>
      <p>{description}</p>
      <span>Price: Rs. {price}</span>
    </>
  );
};

export default ProductDetail;
