import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction, productsLoadedAction } from "./actions/products";
import {
  productsLoadingSelector,
  productsSelector,
} from "./selectors/products";

type ProductListPageProps = {};

const ProductListPage: FC<ProductListPageProps> = (props) => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  // redux saga -> side effect manage

  useEffect(() => {
    dispatch(loadProductsAction());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => dispatch(productsLoadedAction(response.data.data)));
  }, []);

  return (
    <div>
      {loading && <div className="text-3xl text-green-700">Loading...</div>}
      {products &&
        products.map((p) => (
          <div className="text-2xl text-red-700" key={p.id}>
            {p.title} (Rs. {p.price})
          </div>
        ))}
    </div>
  );
};

ProductListPage.defaultProps = {};

export default memo(ProductListPage);
