import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadOrdersAction, ordersLoadedAction } from "./actions/orders";
import { ordersLoadingSelector, ordersSelector } from "./selectors/orders";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  const dispatch = useDispatch();

  const ordersLoading = useSelector(ordersLoadingSelector);

  const orders = useSelector(ordersSelector);



  useEffect(() => {
    dispatch(loadOrdersAction());

    axios.get("https://dummyjson.com/carts").then((response) => {
      dispatch(ordersLoadedAction(response.data.carts));
    });
  }, []);

  if (ordersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {orders.map((o) => (
        <div key={o.id}>
          <Link
            className="text-indigo-700 cursor-pointer"
            to={"/orders/" + o.id}
          >
            Order number {o.id}
          </Link>
          , total: {o.total} products: {o.totalProducts}
        </div>
      ))}
    </div>
  );
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);
