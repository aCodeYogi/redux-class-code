import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderDetailLoadedAction } from "./actions/orders";
import Order from "./models/Order";
import { ordersMapSelector, ordersProductsSelector } from "./selectors/orders";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = +params.orderId!;

  const ordersMap = useSelector(ordersMapSelector);
  const ordersProductsMap = useSelector(ordersProductsSelector);

  const order = ordersMap[orderId];
  const products = ordersProductsMap[orderId];

  console.log("ordersProductsMap", ordersProductsMap);

  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
      console.log("response", response.data);
      dispatch(orderDetailLoadedAction(response.data));
    });
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      This is order number {order.id}, total price: {order.total}
      <div>
        {products.map((p) => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </div>
  );
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);
